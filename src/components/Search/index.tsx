import {
  Search as DigDirSearch,
  SearchButton,
  SearchClear,
  SearchInput,
  type SearchProps as DigDirSearchProps,
  type SearchButtonProps,
  type SearchClearProps,
  type SearchInputProps,
} from '@digdir/designsystemet-react';

export type SearchProps = DigDirSearchProps;

export const Search: typeof DigDirSearch & {
  Button: typeof SearchButton;
  ClearButton: typeof SearchClear;
  Input: typeof SearchInput;
} = Object.assign(DigDirSearch, {
  Button: SearchButton,
  ClearButton: SearchClear,
  Input: SearchInput,
});

// Flat exports of the compound's members, in addition to `Search.*`. A server
// component cannot reach `Search.Member` across the client boundary the way
// client code can, so consumers composing on the server need the members as
// named imports. Digdir exports them this way; the facade passes them on.
export { SearchButton, SearchClear, SearchInput };
export type { SearchButtonProps, SearchClearProps, SearchInputProps };
