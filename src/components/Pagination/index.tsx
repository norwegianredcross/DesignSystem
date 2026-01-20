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

export const Pagination = DigDirPagination;
export const PaginationList = DigDirPaginationList;
export const PaginationItem = DigDirPaginationItem;
export const PaginationButton = DigDirPaginationButton;
export const usePagination = useDigDirPagination;

Pagination.displayName = 'Pagination';
