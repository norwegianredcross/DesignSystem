import {
  Search as DigDirSearch,
  SearchButton,
  SearchClear,
  SearchInput,
  type SearchProps as DigDirSearchProps,
} from '@digdir/designsystemet-react';

export type SearchProps = DigDirSearchProps;

export const Search = Object.assign(DigDirSearch, {
  Button: SearchButton,
  ClearButton: SearchClear,
  Input: SearchInput,
});
