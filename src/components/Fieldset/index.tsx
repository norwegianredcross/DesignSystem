import React from 'react';
import {
  Fieldset as DigDirFieldset,
  type FieldsetProps as DigDirFieldsetProps,
  // Sub-components are accessed via Fieldset.*
} from '@digdir/designsystemet-react';

// Directly export the type from Digdir
export type FieldsetProps = DigDirFieldsetProps;

// Directly export the component from Digdir (includes sub-components)
export const Fieldset = DigDirFieldset;

// Optional: If you still want a consistent display name
// Fieldset.displayName = 'Fieldset'; // Usually not needed
