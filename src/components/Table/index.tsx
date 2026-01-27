import {
  Table as DigDirTable,
  type TableProps as DigDirTableProps,
  // Sub-components are accessed via Table.*
} from '@digdir/designsystemet-react';


/**
 * Table-komponent for å vise data i rader og kolonner.
 * Underkomponenter er tilgjengelige via Table.*
 */
export type TableProps = DigDirTableProps;
export const Table: typeof DigDirTable = DigDirTable;

