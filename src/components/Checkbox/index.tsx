import {
  Checkbox as DigDirCheckbox,
  type CheckboxProps as DigDirCheckboxProps,
  Fieldset as DigDirFieldset, 
  type FieldsetProps as DigDirFieldsetProps,
  useCheckboxGroup as useDigDirCheckboxGroup, 
} from '@digdir/designsystemet-react';


export type CheckboxProps = DigDirCheckboxProps;
export type FieldsetProps = DigDirFieldsetProps; 
export const Checkbox = DigDirCheckbox;
export const Fieldset = DigDirFieldset; 
export const useCheckboxGroup = useDigDirCheckboxGroup; 
Checkbox.displayName = 'Checkbox';
Fieldset.displayName = 'Fieldset';
