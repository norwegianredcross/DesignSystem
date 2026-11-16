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

/** @deprecated Will be removed in the next major version. Use `Input` with `type="search"` in a `Field` instead. See {@link https://designsystemet.no/en/blog/search-is-being-removed-what-should-you-do | Search is being removed, what should you do?} for how to add a search button, search icon or clear button. */
export type SearchProps = DigDirSearchProps;
/** @deprecated Will be removed in the next major version. Use a `Button` with `type="submit"` instead. */
export type SearchButtonProps = DigDirSearchButtonProps;
/** @deprecated Will be removed in the next major version. Use a `<button type="reset">` with an `aria-label` inside a `<form>` instead. See {@link https://designsystemet.no/en/blog/search-is-being-removed-what-should-you-do | Search is being removed, what should you do?}. */
export type SearchClearProps = DigDirSearchClearProps;
/** @deprecated Will be removed in the next major version. Use `Input` with `type="search"` in a `Field` instead. */
export type SearchInputProps = DigDirSearchInputProps;

/** @deprecated Will be removed in the next major version. Use `Input` with `type="search"` in a `Field` instead. See {@link https://designsystemet.no/en/blog/search-is-being-removed-what-should-you-do | Search is being removed, what should you do?} for how to add a search button, search icon or clear button. */
export const Search: WithoutMembers<typeof DigDirSearch, 'Button' | 'Clear' | 'Input'> & {
  /** @deprecated Will be removed in the next major version. Use a `Button` with `type="submit"` instead. */
  Button: typeof DigDirSearchButton;
  /** @deprecated Will be removed in the next major version. Use a `<button type="reset">` with an `aria-label` inside a `<form>` instead. See {@link https://designsystemet.no/en/blog/search-is-being-removed-what-should-you-do | Search is being removed, what should you do?}. */
  Clear: typeof DigDirSearchClear;
  /** @deprecated Will be removed in the next major version. Use a `<button type="reset">` with an `aria-label` inside a `<form>` instead. See {@link https://designsystemet.no/en/blog/search-is-being-removed-what-should-you-do | Search is being removed, what should you do?}. */
  ClearButton: typeof DigDirSearchClear;
  /** @deprecated Will be removed in the next major version. Use `Input` with `type="search"` in a `Field` instead. */
  Input: typeof DigDirSearchInput;
} = Object.assign(DigDirSearch, {
  Button: DigDirSearchButton,
  ClearButton: DigDirSearchClear,
  Input: DigDirSearchInput,
});

// Flat exports: server components can't reach `Search.Input` across the client boundary.
/**
 * Search button inside a `Search`.
 * @deprecated Will be removed in the next major version. Use a `Button` with `type="submit"` instead.
 */
export const SearchButton: typeof DigDirSearchButton = DigDirSearchButton;
/**
 * Clear button, shown when the search input is not empty.
 * @deprecated Will be removed in the next major version. Use a `<button type="reset">` with an `aria-label` inside a `<form>` instead. See {@link https://designsystemet.no/en/blog/search-is-being-removed-what-should-you-do | Search is being removed, what should you do?}.
 */
export const SearchClear: typeof DigDirSearchClear = DigDirSearchClear;
/**
 * Search input inside a `Search`.
 * @deprecated Will be removed in the next major version. Use `Input` with `type="search"` in a `Field` instead.
 */
export const SearchInput: typeof DigDirSearchInput = DigDirSearchInput;
