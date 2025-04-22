import {
  Table as DigDirTable,
  type TableProps as DigDirTableProps,
  // Sub-components are accessed via Table.*
} from '@digdir/designsystemet-react';

// Directly export the type from Digdir
export type TableProps = DigDirTableProps;

// Directly export the component from Digdir (includes sub-components)
export const Table = DigDirTable;

// Optional: If you still want a consistent display name
// Table.displayName = 'Table'; // Usually not needed
