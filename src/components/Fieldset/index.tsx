import {
  Fieldset as DigDirFieldset,
  type FieldsetProps as DigDirFieldsetProps,
} from '@digdir/designsystemet-react';
import {
  FieldsetDescription as DigDirFieldsetDescription,
  type FieldsetDescriptionProps as DigDirFieldsetDescriptionProps,
  FieldsetLegend as DigDirFieldsetLegend,
  type FieldsetLegendProps as DigDirFieldsetLegendProps,
} from '@digdir/designsystemet-react';


/**
 * Fieldset-komponent for å gruppere relaterte skjemafelter.
 */
export type FieldsetProps = DigDirFieldsetProps;
export const Fieldset: typeof DigDirFieldset = DigDirFieldset;

// Flat exports of the compound's members, in addition to `Fieldset.*`. A server
// component cannot reach `Fieldset.Member` across the client boundary the way
// client code can, so consumers composing on the server need the members as
// named imports. Digdir exports them this way; the facade passes them on.
export type FieldsetDescriptionProps = DigDirFieldsetDescriptionProps;
export const FieldsetDescription: typeof DigDirFieldsetDescription = DigDirFieldsetDescription;
export type FieldsetLegendProps = DigDirFieldsetLegendProps;
export const FieldsetLegend: typeof DigDirFieldsetLegend = DigDirFieldsetLegend;
