import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { searchIndex } from './search-index';

/**
 * Indeksvalidering: hver design/- og code/-sti i søkeindeksen må peke på en
 * artikkel som siden faktisk rendrer. Artikkel-id-ene leses ut av sidenes
 * kildekode, så testen feiler når en artikkel fjernes/omdøpes uten at
 * indeksen oppdateres — og omvendt.
 */
const extractIds = (file: string, stateVar: string): Set<string> => {
  const source = readFileSync(file, 'utf8');
  const pattern = new RegExp(`${stateVar} === '([a-z0-9-]+)'`, 'g');
  const ids = new Set<string>();
  for (const match of source.matchAll(pattern)) ids.add(match[1]);
  return ids;
};

describe('search-index', () => {
  const designIds = extractIds('src/pages/Design/index.tsx', 'activeDesignPage');
  const directionIds = extractIds('src/pages/Designretning/index.tsx', 'activeDirectionPage');
  const codeIds = extractIds('src/pages/Code/index.tsx', 'activeCodePage');
  const validPages = new Set(['home', 'components', 'design', 'designretning', 'code', 'tokens', 'whats-new']);
  // components/<navn>-dyplenker valideres mot katalogen: hvert søketreff må
  // peke på en komponent katalogsiden faktisk kan filtrere fram.
  const catalogueSource = readFileSync('src/pages/Components/index.tsx', 'utf8');
  const catalogueMatch = catalogueSource.match(/catalogueComponents = \[([\s\S]*?)\]/);
  const componentIds = new Set(
    [...(catalogueMatch?.[1] ?? '').matchAll(/'([A-Za-z]+)'/g)].map((m) => m[1].toLowerCase()),
  );

  it('has unique ids', () => {
    const ids = searchIndex.map((item) => item.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('every path resolves to a real page or article', () => {
    for (const item of searchIndex) {
      const [page, article] = [
        item.path.includes('/') ? item.path.slice(0, item.path.indexOf('/')) : item.path,
        item.path.includes('/') ? item.path.slice(item.path.indexOf('/') + 1) : undefined,
      ];
      expect(validPages, `ukjent side i path: ${item.path}`).toContain(page);
      if (article !== undefined) {
        const valid =
          page === 'design' ? designIds : page === 'designretning' ? directionIds : page === 'code' ? codeIds : page === 'components' ? componentIds : new Set<string>();
        expect(valid.has(article), `død artikkelsti: ${item.path}`).toBe(true);
      }
    }
  });

  it('covers every design and code article', () => {
    const indexed = new Set(
      searchIndex.filter((i) => i.path.includes('/')).map((i) => i.path.slice(i.path.indexOf('/') + 1)),
    );
    for (const id of designIds) {
      if (id === 'intro') continue; // dekkes av 'design'-sideoppføringen
      expect(indexed.has(id), `design-artikkel mangler i indeksen: ${id}`).toBe(true);
    }
    for (const id of codeIds) {
      if (id === 'intro') continue; // dekkes av 'code'-sideoppføringen
      expect(indexed.has(id), `code-artikkel mangler i indeksen: ${id}`).toBe(true);
    }
    for (const id of directionIds) {
      if (id === 'intro') continue; // dekkes av 'designretning'-sideoppføringen
      expect(indexed.has(id), `designretning-artikkel mangler i indeksen: ${id}`).toBe(true);
    }
  });
});
