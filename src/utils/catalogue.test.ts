import { describe, expect, it } from 'vitest';
import inventory from '../component-inventory.json';
import { catalogueComponents } from '../pages/Components/catalogue';
import { searchIndex } from './search-index';

/**
 * Completeness guard: every primary, non-deprecated component in the
 * canonical inventory must appear in the documentation site's component
 * catalogue AND in the search index. This is how "Footer is not in the
 * component list" class of bugs becomes a failing build instead of a
 * user report.
 */

// The inventory names the export; the catalogue names the component folder.
// Only divergence today: the SpinnerLoader folder exports `Spinner`.
const INVENTORY_TO_CATALOGUE: Record<string, string> = {
  Spinner: 'SpinnerLoader',
};

const primaries = (inventory.exports as { name: string; kind: string; deprecated?: boolean }[])
  .filter((entry) => entry.kind === 'primary' && !entry.deprecated)
  .map((entry) => INVENTORY_TO_CATALOGUE[entry.name] ?? entry.name);

describe('documentation completeness', () => {
  it('every primary component is in the catalogue', () => {
    for (const name of primaries) {
      expect(catalogueComponents, `mangler i komponentkatalogen: ${name}`).toContain(name);
    }
  });

  it('every primary component is searchable', () => {
    const ids = new Set(searchIndex.map((item) => item.id));
    for (const name of primaries) {
      expect(ids.has(name.toLowerCase()), `mangler i søkeindeksen: ${name}`).toBe(true);
    }
  });

  it('every catalogue entry exists in the inventory', () => {
    const known = new Set(primaries);
    for (const name of catalogueComponents) {
      expect(known.has(name), `katalogen viser ukjent komponent: ${name}`).toBe(true);
    }
  });
});
