import {
  Field as DigDirField, 
  type FieldProps as DigDirFieldProps,
  FieldDescription as DigDirFieldDescription,
  FieldCounter as DigDirFieldCounter,
  type FieldDescriptionProps as DigDirFieldDescriptionProps,
  type FieldCounterProps as DigDirFieldCounterProps,
} from '@digdir/designsystemet-react';
import {
  FieldAffix as DigDirFieldAffix,
  type FieldAffixProps as DigDirFieldAffixProps,
  FieldAffixes as DigDirFieldAffixes,
  type FieldAffixesProps as DigDirFieldAffixesProps,
} from '@digdir/designsystemet-react';

/**
 * Field-komponent for å omslutte skjemafelter.
 * Inkluderer støtte for beskrivelse og tegn-teller.
 */
export const Field: typeof DigDirField = DigDirField;
export const FieldDescription: typeof DigDirFieldDescription = DigDirFieldDescription;
export const FieldCounter: typeof DigDirFieldCounter = DigDirFieldCounter;

export type FieldDescriptionProps = DigDirFieldDescriptionProps;
export type FieldCounterProps = DigDirFieldCounterProps;
export type FieldProps = DigDirFieldProps;


FieldDescription.displayName = 'Field.Description';
FieldCounter.displayName = 'Field.Counter';

// Flat exports of the compound's members, in addition to `Field.*`. A server
// component cannot reach `Field.Member` across the client boundary the way
// client code can, so consumers composing on the server need the members as
// named imports. Digdir exports them this way; the facade passes them on.
export type FieldAffixProps = DigDirFieldAffixProps;
export const FieldAffix: typeof DigDirFieldAffix = DigDirFieldAffix;
export type FieldAffixesProps = DigDirFieldAffixesProps;
export const FieldAffixes: typeof DigDirFieldAffixes = DigDirFieldAffixes;
