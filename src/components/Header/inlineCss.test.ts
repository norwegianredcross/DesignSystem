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
 * specificity IT WINS. It is not a fallback — it is an override. Consumers see
 * the bundled copy on the server-rendered first paint and the injected copy
 * from hydration onward, so any property the two resolve differently is a
 * visible flip.
 *
 * Four shipped bugs came from exactly this drift: the injected copy repainted
 * the white logo panel that the bundled sheet removes below 850px, widened the
 * menu's spacer column by 48px, stripped the search overlay's separator, and
 * forced the mobile search label to `inline`. None were visible in light mode,
 * which is why they survived review.
 *
 * WHAT THIS TEST MODELS: declarations are resolved per media context, in
 * source order, a rule applying whenever its conditions are a subset of the
 * context. That suffices here, where a given selector's rules all carry the
 * same specificity and only media queries separate them.
 *
 * WHAT IT DOES NOT MODEL, and therefore cannot catch:
 *   - specificity, `!important`, and inheritance
 *   - two DIFFERENT selectors matching the same element (only identical
 *     selector text is compared)
 *   - source order between distinct selectors of equal specificity
 * A browser-level check of the same invariant lives in Header.stories.tsx
 * (TestLogoPanelGeometry), which measures computed styles with the injected
 * sheet present, absent, and alone.
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

type Decl = {
  /** Media conditions in force, e.g. ['(max-width: 850px)', '(prefers-color-scheme: light)']. */
  conditions: string[];
  selector: string;
  prop: string;
  value: string;
  /** Position in the sheet — later wins among equally-conditioned rules. */
  order: number;
};

/** Splits a selector list on commas that are not inside brackets, parens or quotes. */
function splitSelectors(list: string): string[] {
  const out: string[] = [];
  let depth = 0;
  let quote: string | null = null;
  let current = '';
  for (const ch of list) {
    if (quote) {
      if (ch === quote) quote = null;
    } else if (ch === '"' || ch === "'") quote = ch;
    else if (ch === '[' || ch === '(') depth++;
    else if (ch === ']' || ch === ')') depth--;
    else if (ch === ',' && depth === 0) {
      out.push(current);
      current = '';
      continue;
    }
    current += ch;
  }
  out.push(current);
  return out;
}

/**
 * Canonicalises selector text so the two hand-written copies compare equal:
 * :global(x) is plain x once emitted, [a='b'] / [a="b"] / [a=b] are one
 * selector, and combinator spacing is cosmetic. Quoted attribute VALUES are
 * left alone, so [data-x="a > b"] keeps its spacing.
 */
function normaliseSelector(selector: string): string {
  return selector
    .replace(/:global\(([^)]*)\)/g, '$1')
    .replace(/\[\s*([^\]=\s]+)\s*=\s*"([^"]*)"\s*\]/g, '[$1="$2"]')
    .replace(/\[\s*([^\]=\s]+)\s*=\s*'([^']*)'\s*\]/g, '[$1="$2"]')
    .replace(/\[\s*([^\]=\s"']+)\s*=\s*([^\]"']*?)\s*\]/g, '[$1="$2"]')
    .replace(/("[^"]*")|(\s*([>+~])\s*)/g, (_m, quoted, _combi, op) => quoted ?? ` ${op} `)
    .replace(/("[^"]*")|\s+/g, (_m, quoted) => quoted ?? ' ')
    .trim();
}

/** Flattens a stylesheet into declarations, keeping media nesting and source order. */
function parse(css: string): Decl[] {
  const source = css.replace(/\/\*[\s\S]*?\*\//g, '');
  const out: Decl[] = [];
  let order = 0;

  const walk = (text: string, conditions: string[]) => {
    let i = 0;
    while (i < text.length) {
      const brace = text.indexOf('{', i);
      if (brace === -1) break;
      const head = text.slice(i, brace).trim();
      let depth = 0;
      let end = brace;
      for (; end < text.length; end++) {
        if (text[end] === '{') depth++;
        else if (text[end] === '}' && --depth === 0) break;
      }
      const body = text.slice(brace + 1, end);

      if (head.startsWith('@media')) {
        // Recurse so a nested condition NARROWS rather than disappears. Flatten
        // it and two copies could target opposite colour schemes while their
        // selector and value still compare equal — a hollow pass.
        const nested = head
          .slice('@media'.length)
          .split(/\s+and\s+/)
          .map((c) => c.replace(/\s+/g, ' ').trim())
          .filter(Boolean);
        walk(body, [...conditions, ...nested]);
      } else if (!head.startsWith('@')) {
        for (const raw of splitSelectors(head)) {
          const selector = normaliseSelector(raw);
          if (!selector) continue;
          for (const decl of body.split(';')) {
            const at = decl.indexOf(':');
            if (at === -1) continue;
            const prop = decl.slice(0, at).trim();
            // Formatting only — `rgba(1, 2, 3, 1)` and `rgba(1,2,3,1)` are the
            // same declaration written by two different hands.
            const value = decl
              .slice(at + 1)
              .replace(/\s+/g, ' ')
              .replace(/\s*,\s*/g, ',')
              .trim();
            if (prop && value) out.push({ conditions, selector, prop, value, order: order++ });
          }
        }
      }
      i = end + 1;
    }
  };

  walk(source, []);
  return out;
}

const bundled = parse(moduleCss);
const injected = parse(extractInlineCss(indexTsx));

const appliesIn = (conditions: string[], context: string[]) => conditions.every((c) => context.includes(c));

/** What a property resolves to in one media context: the last rule that applies. */
function effective(decls: Decl[], selector: string, prop: string, context: string[]): string | undefined {
  let winner: Decl | undefined;
  for (const d of decls) {
    if (d.selector !== selector || d.prop !== prop) continue;
    if (!appliesIn(d.conditions, context)) continue;
    if (!winner || d.order > winner.order) winner = d;
  }
  return winner?.value;
}

/** Every media context either sheet can actually render in. */
function contexts(): string[][] {
  const seen = new Map<string, string[]>();
  seen.set('', []);
  for (const d of [...bundled, ...injected]) seen.set([...d.conditions].sort().join(' and '), d.conditions);
  return [...seen.values()];
}

describe('Header inline CSS fallback', () => {
  it('parses both copies, keeping nested media conditions', () => {
    expect(bundled.length).toBeGreaterThan(150);
    expect(injected.length).toBeGreaterThan(150);
    // A nested prefers-color-scheme block must survive as a narrower context
    // rather than collapse into an unconditional mobile rule.
    expect(contexts().some((c) => c.length > 1)).toBe(true);
  });

  for (const context of contexts()) {
    const label = context.length ? context.join(' and ') : 'no media query';
    it(`never changes what the bundled stylesheet computes to — ${label}`, () => {
      const conflicts: string[] = [];
      const pairs = new Map<string, [string, string]>();
      for (const d of injected) {
        if (appliesIn(d.conditions, context)) pairs.set(`${d.selector} ${d.prop}`, [d.selector, d.prop]);
      }
      for (const [selector, prop] of pairs.values()) {
        const mine = effective(injected, selector, prop, context);
        const theirs = effective(bundled, selector, prop, context);
        if (mine === undefined || mine === theirs) continue;
        conflicts.push(
          `  ${selector} { ${prop} }\n` +
            `      styles.module.css : ${theirs ?? '(not declared — browser default applies)'}\n` +
            `      buildInlineCss    : ${mine}`,
        );
      }
      expect(
        conflicts.sort().join('\n\n'),
        'buildInlineCss is injected into <head> AFTER the bundled stylesheet, so at equal ' +
          'specificity it wins. Each entry below renders differently before and after ' +
          'hydration. Either match the bundled value or drop the declaration.',
      ).toBe('');
    });
  }
});
