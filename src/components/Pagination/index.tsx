import {
  Pagination as DigDirPagination,
  type PaginationProps as DigDirPaginationProps,
  usePagination as useDigDirPagination, 
} from '@digdir/designsystemet-react';

/**
 * Pagination-komponent for navigering gjennom sider.
 */
export type PaginationProps = DigDirPaginationProps;
export const Pagination = DigDirPagination;
export const usePagination = useDigDirPagination;

