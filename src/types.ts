import type {
  Size,
  Color,
} from '@digdir/designsystemet/types';
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