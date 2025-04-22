import {
  Select as DigDirSelect,
  type SelectProps as DigDirSelectProps,
  // Sub-components are accessed via Select.*
} from '@digdir/designsystemet-react';

// Directly export the type from Digdir
export type SelectProps = DigDirSelectProps;

// Directly export the component from Digdir (includes sub-components)
export const Select = DigDirSelect;

// Optional: If you still want a consistent display name
// Select.displayName = 'Select'; // Usually not needed
