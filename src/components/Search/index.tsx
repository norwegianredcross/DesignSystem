import {
  Search as DigDirSearch,
  SearchButton as DigDirSearchButton,
  SearchClear as DigDirSearchClear,
  SearchInput as DigDirSearchInput,
  type SearchProps as DigDirSearchProps,
  type SearchButtonProps as DigDirSearchButtonProps,
  type SearchClearProps as DigDirSearchClearProps,
  type SearchInputProps as DigDirSearchInputProps,
} from '@digdir/designsystemet-react';

/** @deprecated Removed in Designsystemet 2.0. See Digdir's guide "Search is being removed, what should you do?". */
export type SearchProps = DigDirSearchProps;
/** @deprecated Removed in Designsystemet 2.0. See Digdir's guide "Search is being removed, what should you do?". */
export type SearchButtonProps = DigDirSearchButtonProps;
/** @deprecated Removed in Designsystemet 2.0. See Digdir's guide "Search is being removed, what should you do?". */
export type SearchClearProps = DigDirSearchClearProps;
/** @deprecated Removed in Designsystemet 2.0. See Digdir's guide "Search is being removed, what should you do?". */
export type SearchInputProps = DigDirSearchInputProps;

/** @deprecated Removed in Designsystemet 2.0. See Digdir's guide "Search is being removed, what should you do?". */
export const Search: typeof DigDirSearch & {
  Button: typeof DigDirSearchButton;
  ClearButton: typeof DigDirSearchClear;
  Input: typeof DigDirSearchInput;
} = Object.assign(DigDirSearch, {
  Button: DigDirSearchButton,
  ClearButton: DigDirSearchClear,
  Input: DigDirSearchInput,
});

// Flat exports: server components can't reach `Search.Input` across the client boundary.
/**
 * Search button inside a `Search`.
 * @deprecated Removed in Designsystemet 2.0. See Digdir's guide "Search is being removed, what should you do?".
 */
export const SearchButton: typeof DigDirSearchButton = DigDirSearchButton;
/**
 * Clear button, shown when the search input is not empty.
 * @deprecated Removed in Designsystemet 2.0. See Digdir's guide "Search is being removed, what should you do?".
 */
export const SearchClear: typeof DigDirSearchClear = DigDirSearchClear;
/**
 * Search input inside a `Search`.
 * @deprecated Removed in Designsystemet 2.0. See Digdir's guide "Search is being removed, what should you do?".
 */
export const SearchInput: typeof DigDirSearchInput = DigDirSearchInput;
