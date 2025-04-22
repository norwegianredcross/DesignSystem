import React from 'react';
import {
  Pagination as DigDirPagination,
  type PaginationProps as DigDirPaginationProps,
  usePagination as useDigDirPagination, // Import the hook
  // Sub-components are accessed via Pagination.*
} from '@digdir/designsystemet-react';

// Directly export the type from Digdir
export type PaginationProps = DigDirPaginationProps;

// Directly export the component from Digdir (includes sub-components)
export const Pagination = DigDirPagination;

// Export the hook
export const usePagination = useDigDirPagination;

// Optional: If you still want a consistent display name
// Pagination.displayName = 'Pagination'; // Usually not needed
