// src/components/Buttons/index.tsx
import React from 'react';
import {
  Button as DigDirButton,
  type ButtonProps as DigDirButtonProps,
} from '@digdir/designsystemet-react';

// Directly export the type from Digdir
export type ButtonsProps = DigDirButtonProps;

// Directly export the component from Digdir
export const Buttons = DigDirButton;

// Optional: If you still want a consistent display name
Buttons.displayName = 'Buttons';