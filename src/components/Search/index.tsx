import React from 'react';
import {
  Search as DigDirSearch,
  type SearchProps as DigDirSearchProps,
  // Sub-components are accessed via Search.*
} from '@digdir/designsystemet-react';

// Directly export the type from Digdir
export type SearchProps = DigDirSearchProps;

// Directly export the component from Digdir (includes sub-components)
export const Search = DigDirSearch;

// Optional: If you still want a consistent display name
// Search.displayName = 'Search'; // Usually not needed
