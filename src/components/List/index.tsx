import {
  List as DigDirList,
  type ListProps as DigDirListProps,
} from '@digdir/designsystemet-react';

/**
 * List-komponent for punktlister (ul) og nummererte lister (ol).
 */
export type ListProps = DigDirListProps;
export const List = DigDirList;

List.displayName = 'List';
