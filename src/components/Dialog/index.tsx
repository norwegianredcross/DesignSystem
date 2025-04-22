import React from 'react';
import {
  Dialog as DigDirDialog,
  type DialogProps as DigDirDialogProps,
  // Sub-components are accessed via Dialog.TriggerContext, Dialog.Trigger, Dialog.Block etc.
} from '@digdir/designsystemet-react';

// Directly export the type from Digdir
export type DialogProps = DigDirDialogProps;

// Directly export the component from Digdir (includes sub-components)
export const Dialog = DigDirDialog;

// Optional: If you still want a consistent display name
// Dialog.displayName = 'Dialog'; // Usually not needed
