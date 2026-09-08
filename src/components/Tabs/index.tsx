
import {
  Tabs as DigDirTabs,
  type TabsProps as DigDirTabsProps,
  // Sub-components are accessed via Tabs.*
} from '@digdir/designsystemet-react';
import {
  TabsList as DigDirTabsList,
  type TabsListProps as DigDirTabsListProps,
  TabsPanel as DigDirTabsPanel,
  type TabsPanelProps as DigDirTabsPanelProps,
  TabsTab as DigDirTabsTab,
  type TabsTabProps as DigDirTabsTabProps,
} from '@digdir/designsystemet-react';

/**
 * Tabs-komponent for faneark-navigasjon.
 * Underkomponenter er tilgjengelige via Tabs.*
 */
export type TabsProps = DigDirTabsProps;
export const Tabs: typeof DigDirTabs = DigDirTabs;

// Flat exports of the compound's members, in addition to `Tabs.*`. A server
// component cannot reach `Tabs.Member` across the client boundary the way
// client code can, so consumers composing on the server need the members as
// named imports. Digdir exports them this way; the facade passes them on.
export type TabsListProps = DigDirTabsListProps;
export const TabsList: typeof DigDirTabsList = DigDirTabsList;
export type TabsPanelProps = DigDirTabsPanelProps;
export const TabsPanel: typeof DigDirTabsPanel = DigDirTabsPanel;
export type TabsTabProps = DigDirTabsTabProps;
export const TabsTab: typeof DigDirTabsTab = DigDirTabsTab;
