import {
  Textfield as DigDirTextfield,
  type TextfieldProps as DigDirTextfieldProps,
} from '@digdir/designsystemet-react';

// Directly export the type from Digdir
export type TextfieldProps = DigDirTextfieldProps;

// Directly export the component from Digdir
export const Textfield = DigDirTextfield;

// Optional: If you still want a consistent display name
// Textfield.displayName = 'Textfield'; // Usually not needed