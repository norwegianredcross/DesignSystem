import {
  Table as DigDirTable,
  type TableProps as DigDirTableProps,
  // Sub-components are accessed via Table.*
} from '@digdir/designsystemet-react';
import {
  TableBody as DigDirTableBody,
  type TableBodyProps as DigDirTableBodyProps,
  TableCell as DigDirTableCell,
  type TableCellProps as DigDirTableCellProps,
  TableFoot as DigDirTableFoot,
  type TableFootProps as DigDirTableFootProps,
  TableHead as DigDirTableHead,
  type TableHeadProps as DigDirTableHeadProps,
  TableHeaderCell as DigDirTableHeaderCell,
  type TableHeaderCellProps as DigDirTableHeaderCellProps,
  TableRow as DigDirTableRow,
  type TableRowProps as DigDirTableRowProps,
} from '@digdir/designsystemet-react';


/**
 * Table-komponent for å vise data i rader og kolonner.
 * Underkomponenter er tilgjengelige via Table.*
 */
export type TableProps = DigDirTableProps;
export const Table: typeof DigDirTable = DigDirTable;

// Flat exports of the compound's members, in addition to `Table.*`. A server
// component cannot reach `Table.Member` across the client boundary the way
// client code can, so consumers composing on the server need the members as
// named imports. Digdir exports them this way; the facade passes them on.
export type TableBodyProps = DigDirTableBodyProps;
export const TableBody: typeof DigDirTableBody = DigDirTableBody;
export type TableCellProps = DigDirTableCellProps;
export const TableCell: typeof DigDirTableCell = DigDirTableCell;
export type TableFootProps = DigDirTableFootProps;
export const TableFoot: typeof DigDirTableFoot = DigDirTableFoot;
export type TableHeadProps = DigDirTableHeadProps;
export const TableHead: typeof DigDirTableHead = DigDirTableHead;
export type TableHeaderCellProps = DigDirTableHeaderCellProps;
export const TableHeaderCell: typeof DigDirTableHeaderCell = DigDirTableHeaderCell;
export type TableRowProps = DigDirTableRowProps;
export const TableRow: typeof DigDirTableRow = DigDirTableRow;
