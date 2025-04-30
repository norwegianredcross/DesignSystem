import {
  Tag as DigDirTag,
  type TagProps as DigDirTagProps,
} from '@digdir/designsystemet-react';

// Directly export the type from Digdir
export type TagProps = DigDirTagProps;

// Directly export the component from Digdir
export const Tag = DigDirTag;

// Optional: If you still want a consistent display name
// Tag.displayName = 'Tag'; // Usually not needed
