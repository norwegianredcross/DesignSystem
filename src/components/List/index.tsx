import {
  List as DigDirList,
} from '@digdir/designsystemet-react';

/**
 * List-komponent for punktlister (ul) og nummererte lister (ol).
 */
// Explicit `typeof` annotation: without it the rolled-up d.ts flattens the
// inferred namespace object into a type literal whose members reference
// values without `typeof` (TS2749), breaking consumers that type-check
// the published declarations.
export const List: typeof DigDirList = DigDirList;
