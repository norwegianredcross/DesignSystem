import {
  Checkbox as DigDirCheckbox,
  type CheckboxProps as DigDirCheckboxProps,
  Fieldset as DigDirFieldset, 
  type FieldsetProps as DigDirFieldsetProps,
  useCheckboxGroup as useDigDirCheckboxGroup, 
} from '@digdir/designsystemet-react';


/**
 * Checkbox-komponent og tilhørende Fieldset/useCheckboxGroup fra DigDir.
 * Brukes for avkrysningsbokser.
 */
export type CheckboxProps = DigDirCheckboxProps;
export type FieldsetProps = DigDirFieldsetProps; 
export const Checkbox: typeof DigDirCheckbox = DigDirCheckbox;
export const Fieldset: typeof DigDirFieldset = DigDirFieldset;
export const useCheckboxGroup: typeof useDigDirCheckboxGroup = useDigDirCheckboxGroup; 
Checkbox.displayName = 'Checkbox';
Fieldset.displayName = 'Fieldset';
