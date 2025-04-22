import React from 'react';
import {
  Checkbox as DigDirCheckbox,
  type CheckboxProps as DigDirCheckboxProps,
  Fieldset as DigDirFieldset, // Needed for grouping
  type FieldsetProps as DigDirFieldsetProps,
  useCheckboxGroup as useDigDirCheckboxGroup, // Hook for group logic
} from '@digdir/designsystemet-react';

// Directly export the type from Digdir
export type CheckboxProps = DigDirCheckboxProps;
export type FieldsetProps = DigDirFieldsetProps; // Export Fieldset props too

// Directly export the component from Digdir
export const Checkbox = DigDirCheckbox;
export const Fieldset = DigDirFieldset; // Export Fieldset too
export const useCheckboxGroup = useDigDirCheckboxGroup; // Export the hook

// Optional: If you still want a consistent display name
Checkbox.displayName = 'Checkbox';
Fieldset.displayName = 'Fieldset';
