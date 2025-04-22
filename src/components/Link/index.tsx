import React from 'react';
import {
  Link as DigDirLink,
  type LinkProps as DigDirLinkProps,
} from '@digdir/designsystemet-react';

// Directly export the type from Digdir
export type LinkProps = DigDirLinkProps;

// Directly export the component from Digdir
export const Link = DigDirLink;

// Optional: If you still want a consistent display name
// Link.displayName = 'Link'; // Usually not needed
 