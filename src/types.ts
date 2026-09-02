// Import from the dedicated types package, not the deprecated
// '@digdir/designsystemet/types' CLI subpath. The published d.ts keeps this
// import path verbatim, so it must be a path consumers can resolve —
// '@digdir/designsystemet-types' is declared in our dependencies for that.
import type {
  Size,
  Color,
} from '@digdir/designsystemet-types';
// Side-effect type import: rk-design-tokens ships a ColorDefinitions
// augmentation listing the real Røde Kors theme scopes. Loading it turns
// Digdir's `Color` from `string` into the closed union of those scopes, so a
// dead scope like data-color="accent" becomes a compile error everywhere in
// this repo. (Consumers get the same augmentation embedded in the published
// dist/index.d.ts by scripts/embed-color-types.mjs.)
//
// NB: @digdir/designsystemet-types must resolve to the SAME copy
// @digdir/designsystemet-react depends on. With two versions in the tree,
// npm nests a second copy under designsystemet-react, the augmentation only
// reaches ours, and every Digdir component's data-color silently widens
// back to `string`. It therefore carries the same caret range as the Digdir
// peers (package.json) so npm dedupes them to one copy - the lockfile holds
// a single entry, and the weekly canary pins the types package to whichever
// Digdir version each leg installs.
import type {} from 'rk-design-tokens/design-tokens-build/types';
import type { ReactNode } from 'react';

// Re-eksporterer disse slik at de er tilgjengelige fra ett sted om nødvendig
export type { Size, Color };

/**
 * Definerer delte data-color og data-size props som egendefinerte
 * komponenter kan akseptere for styling.
 */
export type DefaultProps = {
  /**
   * Endrer størrelse for underliggende Designsystemet-komponenter. Velg fra forhåndsdefinerte størrelser.
   */
  'data-size'?: Size;
  /**
   * Endrer farge for underliggende Designsystemet-komponenter.
   * Velg fra forhåndsdefinerte farger og farger definert med theme.designsystemet.no.
   */
  'data-color'?: Color;
};

/**
 * Hjelpetype for å håndheve tilgjengelighetsmerker (labels).
 * Sikrer at en av 'label', 'aria-label' eller 'aria-labelledby' er oppgitt.
 */
export type LabelRequired =
  | { 'aria-label': string; 'aria-labelledby'?: never; label?: never }
  | { 'aria-label'?: never; 'aria-labelledby'?: never; label: ReactNode }
  | { 'aria-label'?: never; 'aria-labelledby': string; label?: never };