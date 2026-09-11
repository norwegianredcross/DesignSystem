import {
  ErrorSummary as DigDirErrorSummary,
  type ErrorSummaryProps as DigDirErrorSummaryProps,
} from '@digdir/designsystemet-react';
import {
  ErrorSummaryHeading as DigDirErrorSummaryHeading,
  type ErrorSummaryHeadingProps as DigDirErrorSummaryHeadingProps,
  ErrorSummaryItem as DigDirErrorSummaryItem,
  type ErrorSummaryItemProps as DigDirErrorSummaryItemProps,
  ErrorSummaryLink as DigDirErrorSummaryLink,
  type ErrorSummaryLinkProps as DigDirErrorSummaryLinkProps,
  ErrorSummaryList as DigDirErrorSummaryList,
  type ErrorSummaryListProps as DigDirErrorSummaryListProps,
} from '@digdir/designsystemet-react';

/**
 * ErrorSummary-komponent for å vise oppsummering av feil i et skjema.
 */
export type ErrorSummaryProps = DigDirErrorSummaryProps;
export const ErrorSummary: typeof DigDirErrorSummary = DigDirErrorSummary;

// Flat exports of the compound's members, in addition to `ErrorSummary.*`. A server
// component cannot reach `ErrorSummary.Member` across the client boundary the way
// client code can, so consumers composing on the server need the members as
// named imports. Digdir exports them this way; the facade passes them on.
export type ErrorSummaryHeadingProps = DigDirErrorSummaryHeadingProps;
export const ErrorSummaryHeading: typeof DigDirErrorSummaryHeading = DigDirErrorSummaryHeading;
export type ErrorSummaryItemProps = DigDirErrorSummaryItemProps;
export const ErrorSummaryItem: typeof DigDirErrorSummaryItem = DigDirErrorSummaryItem;
export type ErrorSummaryLinkProps = DigDirErrorSummaryLinkProps;
export const ErrorSummaryLink: typeof DigDirErrorSummaryLink = DigDirErrorSummaryLink;
export type ErrorSummaryListProps = DigDirErrorSummaryListProps;
export const ErrorSummaryList: typeof DigDirErrorSummaryList = DigDirErrorSummaryList;
