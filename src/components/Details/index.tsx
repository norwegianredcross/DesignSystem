import React from 'react';
import {
  Details as DigDirDetails,
  type DetailsProps as DigDirDetailsProps,
  // Sub-components are usually accessed via Details.Summary, Details.Content
} from '@digdir/designsystemet-react';

// Directly export the type from Digdir
export type DetailsProps = DigDirDetailsProps;

// Directly export the component from Digdir (includes sub-components)
export const Details = DigDirDetails;

// Optional: If you still want a consistent display name
// Details.displayName = 'Details'; // Usually not needed as it's exported directly
