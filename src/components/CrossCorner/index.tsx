import { forwardRef } from 'react';
import { GraphicElement } from '../GraphicElement';
import type { GraphicElementPosition, GraphicElementSize } from '../GraphicElement';
import type { Color } from '../../types';

/**
 * Props for CrossCorner — bevisst SMALERE enn GraphicElementProps.
 * Gamle CrossCorner hadde ingen shape/variant-props, så wrapperen
 * eksponerer heller ikke disse: da kan ikke ny kode velge andre former
 * gjennom det utdaterte navnet.
 *
 * @deprecated Bruk GraphicElement og GraphicElementProps.
 */
export interface CrossCornerProps {
  /** Hvilket hjørne grafikken peker mot. @default 'top-left' */
  position?: GraphicElementPosition;
  /** Størrelse: sm 48px, md 68px, lg 96px. @default 'md' */
  size?: GraphicElementSize;
  /** Fargescope fra temaet (rk-design-tokens). */
  'data-color'?: Color;
  className?: string;
  'aria-label'?: string;
  /** @default true (dekorativ) */
  'aria-hidden'?: boolean;
}

/**
 * CrossCorner — utdatert kompatibilitetsinnpakning rundt GraphicElement.
 *
 * @deprecated Bruk GraphicElement med shape="angle".
 */
export const CrossCorner = forwardRef<SVGSVGElement, CrossCornerProps>(
  (props, ref) => (
    // Gamle CrossCorner tegnet vinkel-formen (toppbjelke + celle nede til
    // høyre). GraphicElements standard er shape="corner" — en ANNEN figur.
    // Uten denne låsingen ville eksisterende konsumenter fått byttet
    // grafikk i stillhet ved oppgradering.
    <GraphicElement ref={ref} shape="angle" {...props} />
  ),
);

CrossCorner.displayName = 'CrossCorner';

/** @deprecated Bruk GraphicElementPosition. */
export type CrossCornerPosition = GraphicElementPosition;

/** @deprecated Bruk GraphicElementSize. */
export type CrossCornerSize = GraphicElementSize;
