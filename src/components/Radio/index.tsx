import React from 'react';
import {
  Radio as DigDirRadio,
  type RadioProps as DigDirRadioProps,
  Fieldset as DigDirFieldset, // Needed for grouping
  type FieldsetProps as DigDirFieldsetProps,
  useRadioGroup as useDigDirRadioGroup, // Hook for group logic
} from '@digdir/designsystemet-react';

// Directly export the type from Digdir
export type RadioProps = DigDirRadioProps;
export type FieldsetProps = DigDirFieldsetProps; // Export Fieldset props too

// Directly export the component from Digdir
export const Radio = DigDirRadio;
export const Fieldset = DigDirFieldset; // Export Fieldset too
export const useRadioGroup = useDigDirRadioGroup; // Export the hook

// Optional: If you still want a consistent display name
// Radio.displayName = 'Radio'; // Usually not needed
// Fieldset.displayName = 'Fieldset';
