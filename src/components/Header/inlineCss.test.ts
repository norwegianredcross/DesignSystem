import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';

/**
 * Header ships its CSS TWICE: styles.module.css (bundled into
 * dist/rk-designsystem.css) and the buildInlineCss() copy in index.tsx, which
 * a useEffect injects into <head> on every mount.
 *
 * That injected <style> lands AFTER the bundled stylesheet, so at equal
 * specificity IT WINS. It is not a fallback — it is an override. Consumers
 * therefore see the bundled copy on the server-rendered first paint and the
 * injected copy from hydration onward, and any property the two disagree on
 * is a visible flip.
 *
 * Three shipped bugs came from exactly this drift: the injected copy repainted
 * the white logo panel that the bundled sheet removes below 850px, widened the
 * menu's spacer column by 48px, and stripped the search overlay's separator.
 * None were visible in light mode, which is why they survived review.
 *
 * The invariant this test pins: for any selector both copies define, they must
 * not give the same property different values. The injected copy staying
 * SILENT about a property is fine — the bundled value then survives, which is
 * the intended "minimal fallback" behaviour. Only contradictions are bugs.
 */

const dir = path.dirname(fileURLToPath(import.meta.url));
const moduleCss = fs.readFileSync(path.join(dir, 'styles.module.css'), 'utf8');
const indexTsx = fs.readFileSync(path.join(dir, 'index.tsx'), 'utf8');

/** Pulls the template literal out of buildInlineCss and un-hashes `${s.foo}` to `foo`. */
function extractInlineCss(source: string): string {
  const fn = source.indexOf('function buildInlineCss');
  expect(fn, 'buildInlineCss not found in index.tsx').toBeGreaterThan(-1);
  const open = source.indexOf('return `', fn) + 'return `'.length;
  const close = source.indexOf('`;', open);
  expect(close).toBeGreaterThan(open);
  // The literal already carries the leading dot: `.${s.header}` -> `.header`.
  return source.slice(open, close).replace(/\$\{s\.([A-Za-z0-9_]+)\}/g, '$1');
}

type Rules = Map<string, Map<string, string>>;

/**
 * Flattens a stylesheet to `selector -> property -> value`, keying rules inside
 * an @media block by their query so a mobile rule never compares against a
 * desktop one. Values are whitespace-normalised, since the two copies are
 * hand-formatted differently.
 */
function parse(css: string): Rules {
  const withoutComments = css.replace(/\/\*[\s\S]*?\*\//g, '');
  const out: Rules = new Map();

  const add = (scope: string, selectorList: string, body: string) => {
    // A grouped selector is just shorthand for one rule per selector; the two
    // copies group differently, so compare them one selector at a time. CSS
    // Modules' :global(x) is plain x once emitted.
    for (const raw of selectorList.split(',')) {
      const selector = raw
        .replace(/:global\(([^)]*)\)/g, '$1')
        // [a='b'], [a="b"] and [a=b] are the same selector; the two copies are
        // not consistent about quoting, and an unnormalised mismatch here reads
        // as "the bundled sheet never declared this" — a false pass.
        .replace(/\[\s*([^\]=\s]+)\s*=\s*["']?([^\]"']*)["']?\s*\]/g, '[$1="$2"]')
        // Combinators likewise: `.a>.b` and `.a > .b` are one selector.
        .replace(/\s*([>+~])\s*/g, ' $1 ')
        .replace(/\s+/g, ' ')
        .trim();
      if (!selector) continue;
      const key = scope + selector;
      const decls = out.get(key) ?? new Map<string, string>();
      for (const decl of body.split(';')) {
        const at = decl.indexOf(':');
        if (at === -1) continue;
        const prop = decl.slice(0, at).trim();
        // Normalise formatting only — `rgba(1, 2, 3, 1)` and `rgba(1,2,3,1)`
        // are the same declaration written by two different hands.
        const value = decl
          .slice(at + 1)
          .replace(/\s+/g, ' ')
          .replace(/\s*,\s*/g, ',')
          .trim();
        if (prop && value) decls.set(prop, value);
      }
      out.set(key, decls);
    }
  };

  // Lift @media blocks out first so the leftover text is only top-level rules.
  const media: [string, string][] = [];
  let base = '';
  let i = 0;
  while (i < withoutComments.length) {
    const at = withoutComments.indexOf('@media', i);
    if (at === -1) {
      base += withoutComments.slice(i);
      break;
    }
    base += withoutComments.slice(i, at);
    const braceAt = withoutComments.indexOf('{', at);
    let depth = 0;
    let end = braceAt;
    for (; end < withoutComments.length; end++) {
      if (withoutComments[end] === '{') depth++;
      else if (withoutComments[end] === '}' && --depth === 0) break;
    }
    media.push([
      withoutComments.slice(at, braceAt).replace(/\s+/g, ' ').trim(),
      withoutComments.slice(braceAt + 1, end),
    ]);
    i = end + 1;
  }

  const ruleRe = /([^{}]+)\{([^{}]*)\}/g;
  let m: RegExpExecArray | null;
  while ((m = ruleRe.exec(base))) add('', m[1], m[2]);
  for (const [query, body] of media) {
    const inner = /([^{}]+)\{([^{}]*)\}/g;
    let r: RegExpExecArray | null;
    while ((r = inner.exec(body))) add(`${query} | `, r[1], r[2]);
  }
  return out;
}

/**
 * Resolves what a selector's property actually computes to in one context.
 * "mobile" means the max-width: 850px block is in play, so a mobile
 * declaration beats the base one — which is exactly the cascade step the
 * white-logo-panel bug slipped through: the bundled sheet turned the panel
 * transparent in the mobile block, and the injected copy's BASE rule, landing
 * later in <head>, painted it white again.
 */
function effective(rules: Rules, selector: string, prop: string, mobile: boolean): string | undefined {
  if (mobile) {
    for (const [key, decls] of rules) {
      if (!key.startsWith('@media') || !key.includes('850px')) continue;
      if (key.slice(key.indexOf('| ') + 2) !== selector) continue;
      const hit = decls.get(prop);
      if (hit !== undefined) return hit;
    }
  }
  return rules.get(selector)?.get(prop);
}

/** Every selector either copy defines, ignoring the @media prefix. */
function selectors(...sets: Rules[]): string[] {
  const all = new Set<string>();
  for (const rules of sets)
    for (const key of rules.keys()) all.add(key.startsWith('@media') ? key.slice(key.indexOf('| ') + 2) : key);
  return [...all];
}

describe('Header inline CSS fallback', () => {
  const bundled = parse(moduleCss);
  const injected = parse(extractInlineCss(indexTsx));

  it('parses both copies', () => {
    expect(bundled.size).toBeGreaterThan(40);
    expect(injected.size).toBeGreaterThan(40);
  });

  for (const mobile of [false, true]) {
    it(`never changes what the bundled stylesheet computes to (${mobile ? 'mobile' : 'desktop'})`, () => {
      const conflicts: string[] = [];
      for (const selector of selectors(bundled, injected)) {
        // Which properties does the injected copy have an opinion about here?
        const props = new Set<string>();
        for (const [key, decls] of injected) {
          const bare = key.startsWith('@media') ? key.slice(key.indexOf('| ') + 2) : key;
          if (bare !== selector) continue;
          if (key.startsWith('@media') && !mobile) continue;
          for (const prop of decls.keys()) props.add(prop);
        }
        for (const prop of props) {
          const mine = effective(injected, selector, prop, mobile);
          if (mine === undefined) continue;
          const theirs = effective(bundled, selector, prop, mobile);
          if (theirs === mine) continue;
          conflicts.push(
            `  ${selector} { ${prop} }\n` +
              `      styles.module.css : ${theirs ?? '(not declared — browser default applies)'}\n` +
              `      buildInlineCss    : ${mine}`,
          );
        }
      }
      expect(
        conflicts.join('\n\n'),
        'buildInlineCss is injected into <head> AFTER the bundled stylesheet, so at equal ' +
          'specificity it wins. Each line below is a property that renders differently before ' +
          'and after hydration. Either match the bundled value or drop the declaration.',
      ).toBe('');
    });
  }
});
