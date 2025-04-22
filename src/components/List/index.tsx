import React from 'react';
import {
  List as DigDirList,
  // Remove the import for ListProps as it's not exported
  // type ListProps as DigDirListProps,
} from '@digdir/designsystemet-react';

// Remove the export for ListProps
// export type ListProps = DigDirListProps;

// Directly export the component namespace from Digdir
export const List = DigDirList;

// Optional: If you still want a consistent display name for sub-components later
// List.Ordered.displayName = 'List.Ordered';
// List.Unordered.displayName = 'List.Unordered';
// List.Item.displayName = 'List.Item';
