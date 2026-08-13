import {
  Details as DigDirDetails,
  type DetailsProps as DigDirDetailsProps,
} from '@digdir/designsystemet-react';


/**
 * Details-komponent for å vise/skjule innhold.
 */
export type DetailsProps = DigDirDetailsProps;
// Explicit `typeof` annotation: without it the rolled-up d.ts flattens the
// inferred namespace object into a type literal whose members reference
// values without `typeof` (TS2749), breaking consumers that type-check
// the published declarations.
export const Details: typeof DigDirDetails = DigDirDetails;

