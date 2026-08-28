import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';

/**
 * Header ships its CSS TWICE: styles.module.css (bundled into
 * dist/rk-designsystem.css) and the buildInlineCss() copy in index.tsx, which
 * a useEffect injects into <head> on every mount.
 *
 * The injected copy is now prepended, so the bundled stylesheet wins wherever
 * it declares something (see src/components/injectedCss.test.ts for why). It
 * still has to be FAITHFUL: it is the only stylesheet a consumer who never
 * imports 'rk-designsystem/styles' ever gets, so wherever the two disagree,
 * that consumer is shown a design the library does not actually specify.
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
 *   - comma-separated media lists (`@media (a), (b)`), which are treated as one
 *     opaque condition rather than an OR, so contexts where an OR-list rule and
 *     a narrower rule both apply are not enumerated
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
    // Only an unquoted value with NO whitespace is safe to quote: `[a=b i]`
    // carries a case-insensitivity flag and is not the value `b i`.
    .replace(/\[\s*([^\]=\s"']+)\s*=\s*([^\]"'\s]+)\s*\]/g, '[$1="$2"]')
    .replace(/("[^"]*")|(\s*([>+~])\s*)/g, (_m, quoted, _combi, op) => quoted ?? ` ${op} `)
    .replace(/("[^"]*")|\s+/g, (_m, quoted) => quoted ?? ' ')
    .trim();
}

/**
 * Strips comments without touching quoted text, so `content: "/* x *\/"` keeps
 * its value. A regex sweep would eat the string's insides and make two copies
 * with different content values compare equal.
 */
function stripComments(css: string): string {
  let out = '';
  let quote: string | null = null;
  for (let i = 0; i < css.length; i++) {
    const ch = css[i];
    if (quote) {
      out += ch;
      if (ch === '\\') {
        out += css[++i] ?? '';
      } else if (ch === quote) quote = null;
      continue;
    }
    if (ch === '"' || ch === "'") {
      quote = ch;
      out += ch;
      continue;
    }
    if (ch === '/' && css[i + 1] === '*') {
      const end = css.indexOf('*/', i + 2);
      i = end === -1 ? css.length : end + 1;
      continue;
    }
    out += ch;
  }
  return out;
}

/** Index of the `}` closing the block that opens at `from`, ignoring quoted braces. */
function closingBrace(text: string, from: number): number {
  let depth = 0;
  let quote: string | null = null;
  for (let i = from; i < text.length; i++) {
    const ch = text[i];
    if (ch === '\\') {
      // A CSS escape hides the next character, quoted or not: url(foo\\}bar)
      // contains no structural brace.
      i++;
      continue;
    }
    if (quote) {
      if (ch === quote) quote = null;
      continue;
    }
    if (ch === '"' || ch === "'") quote = ch;
    else if (ch === '{') depth++;
    else if (ch === '}' && --depth === 0) return i;
  }
  return text.length;
}

/** Splits a declaration block on semicolons that are not inside quotes or parens. */
function splitDeclarations(body: string): string[] {
  const out: string[] = [];
  let quote: string | null = null;
  let depth = 0;
  let current = '';
  for (let i = 0; i < body.length; i++) {
    const ch = body[i];
    if (ch === '\\') {
      // Escaped semicolons are part of the value, not separators.
      current += ch + (body[++i] ?? '');
      continue;
    }
    if (quote) {
      current += ch;
      if (ch === quote) quote = null;
      continue;
    }
    if (ch === '"' || ch === "'") quote = ch;
    // Brackets and braces nest too: a custom property may hold a whole block,
    // e.g. --theme: { a; b }, whose semicolons are not separators either.
    else if (ch === '(' || ch === '[' || ch === '{') depth++;
    else if (ch === ')' || ch === ']' || ch === '}') depth--;
    else if (ch === ';' && depth === 0) {
      out.push(current);
      current = '';
      continue;
    }
    current += ch;
  }
  out.push(current);
  return out;
}

/** Flattens a stylesheet into declarations, keeping media nesting and source order. */
function parse(css: string): Decl[] {
  const source = stripComments(css);
  const out: Decl[] = [];
  let order = 0;

  const walk = (text: string, conditions: string[]) => {
    let i = 0;
    while (i < text.length) {
      const brace = text.indexOf('{', i);
      if (brace === -1) break;
      const head = text.slice(i, brace).trim();
      const end = closingBrace(text, brace);
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
          for (const decl of splitDeclarations(body)) {
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

/**
 * A media condition, reduced to something we can evaluate at a concrete
 * viewport. Returns null for any form the model cannot express, so unknown
 * query types fail loudly instead of being silently mis-modelled.
 */
function parseCondition(raw: string): ((width: number, scheme: 'light' | 'dark') => boolean) | null {
  const min = /^\(\s*min-width:\s*(\d+)px\s*\)$/.exec(raw);
  if (min) return (width) => width >= Number(min[1]);
  const max = /^\(\s*max-width:\s*(\d+)px\s*\)$/.exec(raw);
  if (max) return (width) => width <= Number(max[1]);
  const prefers = /^\(\s*prefers-color-scheme:\s*(light|dark)\s*\)$/.exec(raw);
  if (prefers) return (_width, scheme) => scheme === prefers[1];
  return null;
}

const atomicConditions = (decls: Decl[]) => [...new Set(decls.flatMap((d) => d.conditions))];

/**
 * Every media context that can actually occur, found by SAMPLING rather than
 * by listing the condition sets that happen to be written down.
 *
 * Listing them is unsound: `(min-width: 768px)` and `(max-width: 850px)` are
 * both live at 800px, so two copies could order those blocks differently and
 * resolve to different values at a real viewport while each written-down set
 * compared equal on its own.
 *
 * Sampling each breakpoint boundary (and just either side of it) crossed with
 * both colour schemes covers every distinct combination the sheets can produce.
 */
function contexts(decls: Decl[]): string[][] {
  const atomics = atomicConditions(decls);
  const breakpoints = atomics
    .map((c) => /(\d+)px/.exec(c)?.[1])
    .filter((n): n is string => n !== undefined)
    .map(Number);
  const widths = [...new Set([0, ...breakpoints.flatMap((b) => [b - 1, b, b + 1]), 10_000])].filter(
    (w) => w >= 0,
  );
  const seen = new Map<string, string[]>();
  for (const width of widths) {
    for (const scheme of ['light', 'dark'] as const) {
      const active = atomics.filter((raw) => parseCondition(raw)?.(width, scheme));
      seen.set([...active].sort().join(' and '), active);
    }
  }
  return [...seen.values()];
}

const headerContexts = contexts([...bundled, ...injected]);

/**
 * Properties the injected copy has an opinion about in this context that
 * resolve differently from the bundled copy.
 */
function conflictsIn(bundledDecls: Decl[], injectedDecls: Decl[], context: string[]): string[] {
  const conflicts: string[] = [];
  const pairs = new Map<string, [string, string]>();
  for (const d of injectedDecls) {
    if (appliesIn(d.conditions, context)) pairs.set(`${d.selector} ${d.prop}`, [d.selector, d.prop]);
  }
  for (const [selector, prop] of pairs.values()) {
    const mine = effective(injectedDecls, selector, prop, context);
    const theirs = effective(bundledDecls, selector, prop, context);
    if (mine === undefined || mine === theirs) continue;
    conflicts.push(
      `  ${selector} { ${prop} }\n` +
        `      styles.module.css : ${theirs ?? '(not declared — browser default applies)'}\n` +
        `      buildInlineCss    : ${mine}`,
    );
  }
  return conflicts;
}

describe('Header inline CSS fallback', () => {
  it('parses both copies, keeping nested media conditions', () => {
    expect(bundled.length).toBeGreaterThan(150);
    expect(injected.length).toBeGreaterThan(150);
    // A nested prefers-color-scheme block must survive as a narrower context
    // rather than collapse into an unconditional mobile rule.
    expect(headerContexts.some((c) => c.length > 1)).toBe(true);
  });

  /**
   * contexts() enumerates only the condition sets literally written, and the
   * @media prelude is split on ' and '. A comma-separated list is an OR, so
   * `@media (a), (b)` would be stored as one opaque condition and two queries
   * that are simultaneously active would never be evaluated together — the
   * copies could then resolve differently at a real viewport while every
   * context above compares equal.
   *
   * No such list exists in either copy today. Rather than model OR (which
   * means enumerating the powerset of active queries), assert the assumption
   * and fail loudly if someone adds one. If this fires, teach parse/contexts
   * about media lists — do not delete the check.
   */
  it('contains no comma-separated media list, which the context model cannot express', () => {
    const offenders: string[] = [];
    for (const [name, css] of [
      ['styles.module.css', moduleCss],
      ['buildInlineCss', extractInlineCss(indexTsx)],
    ] as const) {
      for (const [, prelude] of stripComments(css).matchAll(/@media([^{]*)\{/g)) {
        let depth = 0;
        for (const ch of prelude) {
          if (ch === '(') depth++;
          else if (ch === ')') depth--;
          else if (ch === ',' && depth === 0) {
            offenders.push(`  ${name}: @media${prelude.replace(/\s+/g, ' ').trimEnd()}`);
            break;
          }
        }
      }
    }
    expect(offenders.join('\n')).toBe('');
  });

  it('uses only media conditions the context model can evaluate', () => {
    const unsupported = atomicConditions([...bundled, ...injected]).filter(
      (raw) => parseCondition(raw) === null,
    );
    expect(
      unsupported.join(', '),
      'contexts() samples concrete viewports, so every condition must be a min-width, ' +
        'max-width or prefers-color-scheme query. Teach parseCondition about any new form ' +
        'rather than letting it be sampled as never-true.',
    ).toBe('');
  });

  // Agreement between the copies is not the same as being RIGHT. Below 850px
  // the primary logo is hidden, so the desktop panel's fixed 119px would be an
  // empty masthead — this pins the intent both copies must express, which the
  // drift comparison alone would happily let them agree to lose.
  it('drops the desktop logo panel geometry on mobile in both copies', () => {
    const mobile = ['(max-width: 850px)'];
    for (const [name, sheet] of [
      ['styles.module.css', bundled],
      ['buildInlineCss', injected],
    ] as const) {
      expect(effective(sheet, '.logoWrapper', 'height', mobile), name).toBe('auto');
      expect(effective(sheet, '.logoWrapper', 'background-color', mobile), name).toBe('transparent');
    }
  });

  for (const context of headerContexts) {
    const label = context.length ? context.join(' and ') : 'no media query';
    it(`never changes what the bundled stylesheet computes to — ${label}`, () => {
      expect(
        conflictsIn(bundled, injected, context).sort().join('\n\n'),
        'buildInlineCss is the only stylesheet a consumer who does not import ' +
          "'rk-designsystem/styles' receives. Each entry below is a property where it " +
          'shows them something different from the real design. Either match the bundled ' +
          'value or drop the declaration.',
      ).toBe('');
    });
  }
});

/**
 * The guard above is worth only as much as this parser, and a parser bug shows
 * up as a PASS rather than a failure. These feed it divergences it has missed
 * before and assert it now reports them.
 */
describe('inline CSS parser', () => {
  const diverges = (a: string, b: string) => {
    const left = parse(a);
    const right = parse(b);
    // Same sampling model the real guard uses, so these cases exercise it
    // rather than a simplified stand-in.
    return contexts([...left, ...right]).flatMap((ctx) => conflictsIn(left, right, ctx)).length > 0;
  };

  it('does not let a quoted brace hide the rest of the sheet', () => {
    expect(diverges('.x { content: "}"; color: red; }', '.x { content: "}"; color: blue; }')).toBe(true);
  });

  it('does not treat comment markers inside a string as a comment', () => {
    expect(diverges('.x { content: "/* red */"; }', '.x { content: "/* blue */"; }')).toBe(true);
  });

  it('keeps an attribute case-insensitivity flag distinct from the value', () => {
    // [data-x=foo i] matches `foo` case-insensitively; [data-x="foo i"] matches
    // the literal string `foo i` — different elements, so not comparable.
    expect(parse('[data-x=foo i] { color: red; }')[0].selector).not.toBe(
      parse('[data-x="foo i"] { color: red; }')[0].selector,
    );
  });

  it('sees a nested media condition as narrowing, not as an unconditional rule', () => {
    const light = '@media (max-width: 1px) { @media (prefers-color-scheme: light) { .x { color: red; } } }';
    const dark = '@media (max-width: 1px) { @media (prefers-color-scheme: dark) { .x { color: red; } } }';
    expect(diverges(light, dark)).toBe(true);
  });

  it('evaluates two separately-written media queries that overlap', () => {
    // At 800px both are live. Each query on its own agrees between the copies;
    // only their combination reveals that source order flips the winner.
    const a = '@media (min-width: 768px) { .x { color: red } } @media (max-width: 850px) { .x { color: blue } }';
    const b = '@media (max-width: 850px) { .x { color: blue } } @media (min-width: 768px) { .x { color: red } }';
    expect(diverges(a, b)).toBe(true);
  });

  it('does not treat an escaped brace as structural', () => {
    expect(
      diverges('.x { background: url(foo\\}bar); color: red; }', '.x { background: url(foo\\}bar); color: blue; }'),
    ).toBe(true);
  });

  it('does not split a value on an escaped semicolon', () => {
    expect(diverges('.x { --theme: foo\\;one; }', '.x { --theme: foo\\;two; }')).toBe(true);
  });

  it('does not split a custom property whose value is a block', () => {
    expect(diverges('.x { --theme: {a;one}; }', '.x { --theme: {a;two}; }')).toBe(true);
  });

  it('treats differently-quoted attribute selectors as one selector', () => {
    expect(diverges(".x[data-a='b'] { color: red; }", '.x[data-a="b"] { color: red; }')).toBe(false);
  });
});
