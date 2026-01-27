import {
  Switch as DigDirSwitch,
  type SwitchProps as DigDirSwitchProps,
  Fieldset as DigDirFieldset, // Needed for grouping examples
  type FieldsetProps as DigDirFieldsetProps,
} from '@digdir/designsystemet-react';

/**
 * Switch-komponent for av/på-valg.
 */
export type SwitchProps = DigDirSwitchProps;
export type FieldsetProps = DigDirFieldsetProps; // Export Fieldset props too

// Direkte eksport av komponenten fra Digdir
export const Switch: typeof DigDirSwitch = DigDirSwitch;
export const Fieldset: typeof DigDirFieldset = DigDirFieldset;

