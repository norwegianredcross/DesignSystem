import {
  List as DigDirList,
} from '@digdir/designsystemet-react';
import {
  ListItem as DigDirListItem,
  type ListItemProps as DigDirListItemProps,
  ListOrdered as DigDirListOrdered,
  type ListOrderedProps as DigDirListOrderedProps,
  ListUnordered as DigDirListUnordered,
  type ListUnorderedProps as DigDirListUnorderedProps,
} from '@digdir/designsystemet-react';

/**
 * List-komponent for punktlister (ul) og nummererte lister (ol).
 */
// Explicit `typeof` annotation: without it the rolled-up d.ts flattens the
// inferred namespace object into a type literal whose members reference
// values without `typeof` (TS2749), breaking consumers that type-check
// the published declarations.
export const List: typeof DigDirList = DigDirList;

// Flat exports of the compound's members, in addition to `List.*`. A server
// component cannot reach `List.Member` across the client boundary the way
// client code can, so consumers composing on the server need the members as
// named imports. Digdir exports them this way; the facade passes them on.
export type ListItemProps = DigDirListItemProps;
export const ListItem: typeof DigDirListItem = DigDirListItem;
export type ListOrderedProps = DigDirListOrderedProps;
export const ListOrdered: typeof DigDirListOrdered = DigDirListOrdered;
export type ListUnorderedProps = DigDirListUnorderedProps;
export const ListUnordered: typeof DigDirListUnordered = DigDirListUnordered;
