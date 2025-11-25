import {
  Field as DigDirField, 
  type FieldProps as DigDirFieldProps,
  FieldDescription as DigDirFieldDescription,
  FieldCounter as DigDirFieldCounter,
  type FieldDescriptionProps as DigDirFieldDescriptionProps,
  type FieldCounterProps as DigDirFieldCounterProps,
} from '@digdir/designsystemet-react';

/**
 * Field-komponent for å omslutte skjemafelter.
 * Inkluderer støtte for beskrivelse og tegn-teller.
 */
export const Field = DigDirField;
export const FieldDescription = DigDirFieldDescription;
export const FieldCounter = DigDirFieldCounter;

export type FieldDescriptionProps = DigDirFieldDescriptionProps;
export type FieldCounterProps = DigDirFieldCounterProps;
export type FieldProps = DigDirFieldProps;


FieldDescription.displayName = 'Field.Description';
FieldCounter.displayName = 'Field.Counter';
