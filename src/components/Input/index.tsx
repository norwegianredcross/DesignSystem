import React from 'react';
import {
  Input as DigDirInput,
  type InputProps as DigDirInputProps,
} from '@digdir/designsystemet-react';

// Directly export the type from Digdir
export type InputProps = DigDirInputProps;

// Directly export the component from Digdir
export const Input = DigDirInput;

// Optional: If you still want a consistent display name
// Input.displayName = 'Input'; // Usually not needed
