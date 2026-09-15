import {
  Select as DigDirSelect,
  type SelectProps as DigDirSelectProps,
} from '@digdir/designsystemet-react';
import {
  SelectOptgroup as DigDirSelectOptgroup,
  type SelectOptgroupProps as DigDirSelectOptgroupProps,
  SelectOption as DigDirSelectOption,
  type SelectOptionProps as DigDirSelectOptionProps,
} from '@digdir/designsystemet-react';

/**
 * Select-komponent som er en wrapper rundt DigDir sin Select.
 * Brukes for nedtrekkslister.
 */
export type SelectProps = DigDirSelectProps;
export const Select: typeof DigDirSelect = DigDirSelect;

// Flat exports of the compound's members, in addition to `Select.*`. A server
// component cannot reach `Select.Member` across the client boundary the way
// client code can, so consumers composing on the server need the members as
// named imports. Digdir exports them this way; the facade passes them on.
export type SelectOptgroupProps = DigDirSelectOptgroupProps;
export const SelectOptgroup: typeof DigDirSelectOptgroup = DigDirSelectOptgroup;
export type SelectOptionProps = DigDirSelectOptionProps;
export const SelectOption: typeof DigDirSelectOption = DigDirSelectOption;
