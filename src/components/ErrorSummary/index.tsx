import React from 'react';
import {
  ErrorSummary as DigDirErrorSummary,
  type ErrorSummaryProps as DigDirErrorSummaryProps,
  // Sub-components are accessed via ErrorSummary.*
} from '@digdir/designsystemet-react';

// Directly export the type from Digdir
export type ErrorSummaryProps = DigDirErrorSummaryProps;

// Directly export the component from Digdir (includes sub-components)
export const ErrorSummary = DigDirErrorSummary;

// Optional: If you still want a consistent display name
// ErrorSummary.displayName = 'ErrorSummary'; // Usually not needed
