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
import type { WithoutMembers } from '../../utilities';

/** @deprecated Removed in Designsystemet 2.0. See Digdir's guide "Search is being removed, what should you do?". */
export type SearchProps = DigDirSearchProps;
/** @deprecated Removed in Designsystemet 2.0. See Digdir's guide "Search is being removed, what should you do?". */
export type SearchButtonProps = DigDirSearchButtonProps;
/** @deprecated Removed in Designsystemet 2.0. See Digdir's guide "Search is being removed, what should you do?". */
export type SearchClearProps = DigDirSearchClearProps;
/** @deprecated Removed in Designsystemet 2.0. See Digdir's guide "Search is being removed, what should you do?". */
export type SearchInputProps = DigDirSearchInputProps;

/** @deprecated Removed in Designsystemet 2.0. See Digdir's guide "Search is being removed, what should you do?". */
export const Search: WithoutMembers<typeof DigDirSearch, 'Button' | 'Clear' | 'Input'> & {
  /** @deprecated Removed in Designsystemet 2.0. See Digdir's guide "Search is being removed, what should you do?". */
  Button: typeof DigDirSearchButton;
  /** @deprecated Removed in Designsystemet 2.0. See Digdir's guide "Search is being removed, what should you do?". */
  Clear: typeof DigDirSearchClear;
  /** @deprecated Removed in Designsystemet 2.0. See Digdir's guide "Search is being removed, what should you do?". */
  ClearButton: typeof DigDirSearchClear;
  /** @deprecated Removed in Designsystemet 2.0. See Digdir's guide "Search is being removed, what should you do?". */
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
