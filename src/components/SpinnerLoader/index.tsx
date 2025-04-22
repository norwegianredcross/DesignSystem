import {
  Spinner as DigDirSpinner,
  type SpinnerProps as DigDirSpinnerProps,
} from '@digdir/designsystemet-react';

// Directly export the type from Digdir
export type SpinnerProps = DigDirSpinnerProps;

// Directly export the component from Digdir
export const Spinner = DigDirSpinner;

// Optional: If you still want a consistent display name
// Spinner.displayName = 'Spinner'; // Usually not needed
