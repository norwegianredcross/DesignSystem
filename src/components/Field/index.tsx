import React from 'react';
import {
  Field as DigDirField,
  type FieldProps as DigDirFieldProps,
  // Import the necessary sub-components explicitly

  FieldDescription as DigDirFieldDescription,




  FieldCounter as DigDirFieldCounter,

  type FieldDescriptionProps as DigDirFieldDescriptionProps,

  type FieldCounterProps as DigDirFieldCounterProps,
} from '@digdir/designsystemet-react';

// Export main type and component
export type FieldProps = DigDirFieldProps;
export const Field = DigDirField;

// Export sub-components individually

export const FieldDescription = DigDirFieldDescription;

export const FieldCounter = DigDirFieldCounter;

// Export sub-component prop types if needed

export type FieldDescriptionProps = DigDirFieldDescriptionProps;

export type FieldCounterProps = DigDirFieldCounterProps;

// Optional: Add displayNames for clarity in dev tools
// Field.displayName = 'Field'; // Base component

FieldDescription.displayName = 'Field.Description';

FieldCounter.displayName = 'Field.Counter';
