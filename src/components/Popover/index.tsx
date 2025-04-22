import React from 'react';
import {
  Popover as DigDirPopover,
  type PopoverProps as DigDirPopoverProps,
  // Sub-components are accessed via Popover.*
} from '@digdir/designsystemet-react';

// Directly export the type from Digdir
export type PopoverProps = DigDirPopoverProps;

// Directly export the component from Digdir (includes sub-components)
export const Popover = DigDirPopover;

// Optional: If you still want a consistent display name
// Popover.displayName = 'Popover'; // Usually not needed
