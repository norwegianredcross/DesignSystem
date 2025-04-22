import {
  ToggleGroup as DigDirToggleGroup,
  type ToggleGroupProps as DigDirToggleGroupProps,
  // Sub-components are accessed via ToggleGroup.*
} from '@digdir/designsystemet-react';

// Directly export the type from Digdir
export type ToggleGroupProps = DigDirToggleGroupProps;

// Directly export the component from Digdir (includes sub-components)
export const ToggleGroup = DigDirToggleGroup;

// Optional: If you still want a consistent display name
// ToggleGroup.displayName = 'ToggleGroup'; // Usually not needed
