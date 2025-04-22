// src/components/Chip/index.tsx
import React from 'react';
import {
  Chip as DigDirChip,
  // Import variant prop types if needed for specific use cases
  ChipRadioProps as DigDirChipRadioProps,
  ChipCheckboxProps as DigDirChipCheckboxProps,
  ChipRemovableProps as DigDirChipRemovableProps,
  ChipButtonProps as DigDirChipButtonProps,
} from '@digdir/designsystemet-react';

// Export the main Chip component (acts as namespace)
export const Chip = DigDirChip;

// Export types for each variant if needed
export type ChipRadioProps = DigDirChipRadioProps;
export type ChipCheckboxProps = DigDirChipCheckboxProps;
export type ChipRemovableProps = DigDirChipRemovableProps;
export type ChipButtonProps = DigDirChipButtonProps;

// REMOVED: Chip.displayName = 'Chip';
