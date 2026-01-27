import {
  Select as DigDirSelect,
  type SelectProps as DigDirSelectProps,
} from '@digdir/designsystemet-react';

/**
 * Select-komponent som er en wrapper rundt DigDir sin Select.
 * Brukes for nedtrekkslister.
 */
export type SelectProps = DigDirSelectProps;
export const Select: typeof DigDirSelect = DigDirSelect;


