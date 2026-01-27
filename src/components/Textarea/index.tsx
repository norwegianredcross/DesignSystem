import {
  Textarea as DigDirTextarea,
  type TextareaProps as DigDirTextareaProps,
} from '@digdir/designsystemet-react';

/**
 * Textarea-komponent for flerlinjers tekstfelt.
 */
export type TextareaProps = DigDirTextareaProps;

// Direkte eksport av komponenten fra Digdir
export const Textarea: typeof DigDirTextarea = DigDirTextarea;

