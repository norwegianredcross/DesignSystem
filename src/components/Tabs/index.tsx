
import {
  Tabs as DigDirTabs,
  type TabsProps as DigDirTabsProps,
  // Sub-components are accessed via Tabs.*
} from '@digdir/designsystemet-react';

// Directly export the type from Digdir
export type TabsProps = DigDirTabsProps;

// Directly export the component from Digdir (includes sub-components)
export const Tabs = DigDirTabs;

// Optional: If you still want a consistent display name
// Tabs.displayName = 'Tabs'; // Usually not needed
