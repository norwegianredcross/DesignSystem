import {
  Details as DigDirDetails,
  type DetailsProps as DigDirDetailsProps,
} from '@digdir/designsystemet-react';
import {
  DetailsContent as DigDirDetailsContent,
  type DetailsContentProps as DigDirDetailsContentProps,
  DetailsSummary as DigDirDetailsSummary,
  type DetailsSummaryProps as DigDirDetailsSummaryProps,
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

// Flat exports of the compound's members, in addition to `Details.*`. A server
// component cannot reach `Details.Member` across the client boundary the way
// client code can, so consumers composing on the server need the members as
// named imports. Digdir exports them this way; the facade passes them on.
export type DetailsContentProps = DigDirDetailsContentProps;
export const DetailsContent: typeof DigDirDetailsContent = DigDirDetailsContent;
export type DetailsSummaryProps = DigDirDetailsSummaryProps;
export const DetailsSummary: typeof DigDirDetailsSummary = DigDirDetailsSummary;
