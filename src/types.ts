import type {
  Size,
  Color,
} from '@digdir/designsystemet/types';
import type { ReactNode } from 'react';

// Re-exporting these so they are available from one place if needed
export type { Size, Color };

/**
 * Defines the shared data-color and data-size props that custom
 * components can accept for styling.
 */
export type DefaultProps = {
  /**
   * Changes size for descendant Designsystemet components. Select from predefined sizes.
   */
  'data-size'?: Size;
  /**
   * Changes color for descendant Designsystemet components.
   * Select from predefined colors and colors defined using theme.designsystemet.no.
   */
  'data-color'?: Color;
};

/**
 * Utility type to enforce accessibility labels.
 * Ensures that one of 'label', 'aria-label', or 'aria-labelledby' is provided.
 */
export type LabelRequired =
  | { 'aria-label': string; 'aria-labelledby'?: never; label?: never }
  | { 'aria-label'?: never; 'aria-labelledby'?: never; label: ReactNode }
  | { 'aria-label'?: never; 'aria-labelledby': string; label?: never };