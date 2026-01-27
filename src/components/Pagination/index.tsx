import {
  Pagination as DigDirPagination,
  PaginationList as DigDirPaginationList,
  PaginationItem as DigDirPaginationItem,
  PaginationButton as DigDirPaginationButton,
  type PaginationProps as DigDirPaginationProps,
  type PaginationListProps as DigDirPaginationListProps,
  type PaginationItemProps as DigDirPaginationItemProps,
  type PaginationButtonProps as DigDirPaginationButtonProps,
  usePagination as useDigDirPagination,
} from '@digdir/designsystemet-react';

/**
 * Pagination-komponent for navigering gjennom sider.
 * Brukes med Pagination.List, Pagination.Item og Pagination.Button som sub-komponenter.
 */
export type PaginationProps = DigDirPaginationProps;
export type PaginationListProps = DigDirPaginationListProps;
export type PaginationItemProps = DigDirPaginationItemProps;
export type PaginationButtonProps = DigDirPaginationButtonProps;

export const Pagination: typeof DigDirPagination = DigDirPagination;
export const PaginationList: typeof DigDirPaginationList = DigDirPaginationList;
export const PaginationItem: typeof DigDirPaginationItem = DigDirPaginationItem;
export const PaginationButton: typeof DigDirPaginationButton = DigDirPaginationButton;
export const usePagination: typeof useDigDirPagination = useDigDirPagination;

Pagination.displayName = 'Pagination';
