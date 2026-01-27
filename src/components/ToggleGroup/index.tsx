import {
  ToggleGroup as DigDirToggleGroup,
  type ToggleGroupProps as DigDirToggleGroupProps,
  // Sub-components are accessed via ToggleGroup.*
} from '@digdir/designsystemet-react';

/**
 * ToggleGroup-komponent for å velge mellom flere alternativer.
 * Underkomponenter er tilgjengelige via ToggleGroup.*
 */
export type ToggleGroupProps = DigDirToggleGroupProps;
export const ToggleGroup: typeof DigDirToggleGroup = DigDirToggleGroup;
