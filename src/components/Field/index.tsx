// src/components/Field/index.tsx
import React from 'react';
import {
  Field as DigDirField, // Import original Field with an alias
  type FieldProps as DigDirFieldProps,
  // Import the sub-components you want to export individually
  FieldDescription as DigDirFieldDescription,
  FieldCounter as DigDirFieldCounter,
  // Import their prop types
  type FieldDescriptionProps as DigDirFieldDescriptionProps,
  type FieldCounterProps as DigDirFieldCounterProps,
} from '@digdir/designsystemet-react';

// Export main type and component
export type FieldProps = DigDirFieldProps;
// FIX: Export the imported DigDirField as Field
export const Field = DigDirField;

// Export sub-components individually as requested
export const FieldDescription = DigDirFieldDescription;
export const FieldCounter = DigDirFieldCounter;

// Export sub-component prop types if needed
export type FieldDescriptionProps = DigDirFieldDescriptionProps;
export type FieldCounterProps = DigDirFieldCounterProps;

// Add displayNames for clarity in dev tools
// We can't set Field.displayName here easily as it's the direct export
FieldDescription.displayName = 'Field.Description';
FieldCounter.displayName = 'Field.Counter';
