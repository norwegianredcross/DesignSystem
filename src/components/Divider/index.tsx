import React from 'react';
import {
  Divider as DigDirDivider,
  type DividerProps as DigDirDividerProps,
} from '@digdir/designsystemet-react';

// Directly export the type from Digdir
export type DividerProps = DigDirDividerProps;

// Directly export the component from Digdir
export const Divider = DigDirDivider;

// Optional: If you still want a consistent display name
// Divider.displayName = 'Divider'; // Usually not needed
