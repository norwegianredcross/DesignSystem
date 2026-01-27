import {
  Tag as DigDirTag,
  type TagProps as DigDirTagProps,
} from '@digdir/designsystemet-react';

/**
 * Tag-komponent for merking eller kategorisering.
 */
export type TagProps = DigDirTagProps;

// Direkte eksport av komponenten fra Digdir
export const Tag: typeof DigDirTag = DigDirTag;

