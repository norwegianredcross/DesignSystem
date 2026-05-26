import {
  Button as DigDirButton,
} from '@digdir/designsystemet-react';
import type { Color, SeverityColors } from '@digdir/designsystemet-types';
import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react';
import './Button.css';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'soft';
export type ButtonShape = 'squared' | 'pill';

/**
 * Props mirror @digdir/designsystemet-react Button but widen `variant` to
 * include rk-designsystem's `'soft'` extension and add a `shape` axis.
 *
 * Built from `ButtonHTMLAttributes` rather than `Omit<DigDirButtonProps, …>` —
 * TS Omit on intersection-of-mapped types (Digdir's `MergeRight<>`) collapses
 * the shape and loses standard HTML attrs like `className`/`style`.
 */
export interface ButtonProps
  extends Omit<
    ButtonHTMLAttributes<HTMLButtonElement>,
    'command' | 'commandfor' | 'commandFor' | 'type'
  > {
  /**
   * Color treatment. `'soft'` is an rk-designsystem extension that renders a
   * tinted surface with no border; the active `data-color` cascade picks the ramp.
   * @default 'primary'
   */
  variant?: ButtonVariant;
  /**
   * Geometry. `'pill'` fully rounds both ends. Orthogonal to `variant`.
   * @default 'squared'
   */
  shape?: ButtonShape;
  'data-color'?: Color | Extract<SeverityColors, 'danger'>;
  'data-size'?: 'sm' | 'md' | 'lg';
  icon?: boolean;
  loading?: boolean | ReactNode;
  asChild?: boolean;
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  command?: string;
  commandfor?: string;
  commandFor?: string;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant, shape, ...rest },
  ref,
) {
  // Digdir narrows variant in TS but the runtime forwards it verbatim to
  // data-variant, so 'soft' flows through. data-shape isn't part of Digdir's
  // prop type, so route both via a generic spread.
  const extra: Record<string, unknown> = {};
  if (variant !== undefined) extra.variant = variant;
  if (shape === 'pill') extra['data-shape'] = 'pill';
  return <DigDirButton ref={ref} {...rest} {...extra} />;
});

Button.displayName = 'Button';
