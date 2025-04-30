import {
  Textarea as DigDirTextarea,
  type TextareaProps as DigDirTextareaProps,
} from '@digdir/designsystemet-react';

// Directly export the type from Digdir
export type TextareaProps = DigDirTextareaProps;

// Directly export the component from Digdir
export const Textarea = DigDirTextarea;

// Optional: If you still want a consistent display name
// Textarea.displayName = 'Textarea'; // Usually not needed
