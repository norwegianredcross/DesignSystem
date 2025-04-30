import {
  Switch as DigDirSwitch,
  type SwitchProps as DigDirSwitchProps,
  Fieldset as DigDirFieldset, // Needed for grouping examples
  type FieldsetProps as DigDirFieldsetProps,
} from '@digdir/designsystemet-react';

// Directly export the type from Digdir
export type SwitchProps = DigDirSwitchProps;
export type FieldsetProps = DigDirFieldsetProps; // Export Fieldset props too

// Directly export the component from Digdir
export const Switch = DigDirSwitch;
export const Fieldset = DigDirFieldset; // Export Fieldset too

// Optional: If you still want a consistent display name
// Switch.displayName = 'Switch'; // Usually not needed
// Fieldset.displayName = 'Fieldset';
