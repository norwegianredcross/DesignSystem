import {
  Chip as DigDirChip,
  // Import variant prop types if needed for specific use cases
  ChipRadioProps as DigDirChipRadioProps,
  ChipCheckboxProps as DigDirChipCheckboxProps,
  ChipRemovableProps as DigDirChipRemovableProps,
  ChipButtonProps as DigDirChipButtonProps,
} from '@digdir/designsystemet-react';
import {
  ChipButton as DigDirChipButton,
  ChipCheckbox as DigDirChipCheckbox,
  ChipRadio as DigDirChipRadio,
  ChipRemovable as DigDirChipRemovable,
} from '@digdir/designsystemet-react';


/**
 * Chip-komponent for filtrering, valg eller handlinger.
 */
// Explicit `typeof` annotation: without it the rolled-up d.ts flattens the
// inferred namespace object into a type literal whose members reference
// values without `typeof` (TS2749), breaking consumers that type-check
// the published declarations.
export const Chip: typeof DigDirChip = DigDirChip;
export type ChipRadioProps = DigDirChipRadioProps;
export type ChipCheckboxProps = DigDirChipCheckboxProps;
export type ChipRemovableProps = DigDirChipRemovableProps;
export type ChipButtonProps = DigDirChipButtonProps;

// Flat exports of the compound's members, in addition to `Chip.*`. A server
// component cannot reach `Chip.Member` across the client boundary the way
// client code can, so consumers composing on the server need the members as
// named imports. Digdir exports them this way; the facade passes them on.
export const ChipButton: typeof DigDirChipButton = DigDirChipButton;
export const ChipCheckbox: typeof DigDirChipCheckbox = DigDirChipCheckbox;
export const ChipRadio: typeof DigDirChipRadio = DigDirChipRadio;
export const ChipRemovable: typeof DigDirChipRemovable = DigDirChipRemovable;
