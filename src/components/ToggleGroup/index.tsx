import {
  ToggleGroup as DigDirToggleGroup,
  type ToggleGroupProps as DigDirToggleGroupProps,
  // Sub-components are accessed via ToggleGroup.*
} from '@digdir/designsystemet-react';
import {
  ToggleGroupItem as DigDirToggleGroupItem,
  type ToggleGroupItemProps as DigDirToggleGroupItemProps,
} from '@digdir/designsystemet-react';

/**
 * ToggleGroup-komponent for å velge mellom flere alternativer.
 * Underkomponenter er tilgjengelige via ToggleGroup.*
 */
export type ToggleGroupProps = DigDirToggleGroupProps;
export const ToggleGroup: typeof DigDirToggleGroup = DigDirToggleGroup;

// Flat exports of the compound's members, in addition to `ToggleGroup.*`. A server
// component cannot reach `ToggleGroup.Member` across the client boundary the way
// client code can, so consumers composing on the server need the members as
// named imports. Digdir exports them this way; the facade passes them on.
export type ToggleGroupItemProps = DigDirToggleGroupItemProps;
export const ToggleGroupItem: typeof DigDirToggleGroupItem = DigDirToggleGroupItem;
