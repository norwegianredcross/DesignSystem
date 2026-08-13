import {
  Chip as DigDirChip,
  // Import variant prop types if needed for specific use cases
  ChipRadioProps as DigDirChipRadioProps,
  ChipCheckboxProps as DigDirChipCheckboxProps,
  ChipRemovableProps as DigDirChipRemovableProps,
  ChipButtonProps as DigDirChipButtonProps,
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


