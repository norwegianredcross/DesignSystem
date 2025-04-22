import React from 'react';
import {
  Dropdown as DigDirDropdown,
  type DropdownProps as DigDirDropdownProps,
  // Sub-components are accessed via Dropdown.*
} from '@digdir/designsystemet-react';

// Directly export the type from Digdir
export type DropdownProps = DigDirDropdownProps;

// Directly export the component from Digdir (includes sub-components)
export const Dropdown = DigDirDropdown;

// Optional: If you still want a consistent display name
// Dropdown.displayName = 'Dropdown'; // Usually not needed
