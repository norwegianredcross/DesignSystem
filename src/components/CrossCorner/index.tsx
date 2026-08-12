import { forwardRef } from 'react';
import { GraphicElement } from '../GraphicElement';
import type { GraphicElementPosition, GraphicElementSize } from '../GraphicElement';
import type { Color } from '../../types';

/**
 * Props for CrossCorner — deliberately NARROWER than GraphicElementProps.
 * The old CrossCorner had no shape/variant props, so the wrapper does not
 * expose them either: new code cannot pick other shapes through the
 * deprecated name.
 *
 * @deprecated Bruk GraphicElement og GraphicElementProps.
 */
export interface CrossCornerProps {
  /** Which corner the graphic points to. @default 'top-left' */
  position?: GraphicElementPosition;
  /** Size: sm 48px, md 68px, lg 96px. @default 'md' */
  size?: GraphicElementSize;
  /** Color scope from the theme (rk-design-tokens). */
  'data-color'?: Color;
  className?: string;
  'aria-label'?: string;
  /** @default true (decorative) */
  'aria-hidden'?: boolean;
}

/**
 * CrossCorner — deprecated compatibility wrapper around GraphicElement.
 *
 * @deprecated Bruk GraphicElement med shape="angle".
 */
export const CrossCorner = forwardRef<SVGSVGElement, CrossCornerProps>(
  (props, ref) => (
    // The old CrossCorner drew the angle shape (top bar + bottom-right
    // cell). GraphicElement's default is shape="corner" — a DIFFERENT
    // figure. Without this lock, existing consumers would silently get a
    // different graphic when upgrading.
    <GraphicElement ref={ref} shape="angle" {...props} />
  ),
);

CrossCorner.displayName = 'CrossCorner';

/** @deprecated Bruk GraphicElementPosition. */
export type CrossCornerPosition = GraphicElementPosition;

/** @deprecated Bruk GraphicElementSize. */
export type CrossCornerSize = GraphicElementSize;
