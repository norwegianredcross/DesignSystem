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

export const Breadcrumbs: typeof DigDirBreadcrumbs = DigDirBreadcrumbs;
export const BreadcrumbsList: typeof DigDirBreadcrumbsList = DigDirBreadcrumbsList;
export const BreadcrumbsItem: typeof DigDirBreadcrumbsItem = DigDirBreadcrumbsItem;
export const BreadcrumbsLink: typeof DigDirBreadcrumbsLink = DigDirBreadcrumbsLink;
