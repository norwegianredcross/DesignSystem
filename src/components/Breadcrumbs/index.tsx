import {
  Breadcrumbs as DigDirBreadcrumbs,
  BreadcrumbsProps as DigDirBreadcrumbsProps,
  BreadcrumbsList as DigDirBreadcrumbsList,
  BreadcrumbsItem as DigDirBreadcrumbsItem,
  BreadcrumbsLink as DigDirBreadcrumbsLink,
} from '@digdir/designsystemet-react';

/**
 * Breadcrumbs-komponenter for navigasjonssti.
 * Eksporterer hovedkomponenten og underkomponenter.
 */
export interface BreadcrumbsProps extends DigDirBreadcrumbsProps {}

export const Breadcrumbs = DigDirBreadcrumbs;
export const BreadcrumbsList = DigDirBreadcrumbsList;
export const BreadcrumbsItem = DigDirBreadcrumbsItem;
export const BreadcrumbsLink = DigDirBreadcrumbsLink;
