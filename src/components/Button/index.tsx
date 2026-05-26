import {
  Button as DigDirButton,
} from '@digdir/designsystemet-react';
import type { Color, SeverityColors } from '@digdir/designsystemet-types';
import { forwardRef, type ButtonHTMLAttributes, type CSSProperties, type ReactNode } from 'react';

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

// Shape and variant overrides applied as inline custom properties / style.
// Digdir already routes background/color/border-color through --dsc-button-*,
// so soft variant works token-only. Digdir hardcodes border-radius, so shape
// has to set the property directly.
function softVariantStyle(): CSSProperties {
  return {
    '--dsc-button-background':         'var(--ds-color-surface-tinted)',
    '--dsc-button-background--hover':  'var(--ds-color-surface-hover)',
    '--dsc-button-background--active': 'var(--ds-color-surface-active)',
    '--dsc-button-color':              'var(--ds-color-text-default)',
    '--dsc-button-color--hover':       'var(--ds-color-text-default)',
    '--dsc-button-border-color':       'transparent',
  } as CSSProperties;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant, shape, style, ...rest },
  ref,
) {
  // Build our defaults first; consumer's `style` wins via later spread.
  const ours: CSSProperties = {};
  if (variant === 'soft') Object.assign(ours, softVariantStyle());
  if (shape === 'pill') ours.borderRadius = 'var(--ds-border-radius-full)';
  const mergedStyle: CSSProperties | undefined =
    Object.keys(ours).length === 0 && !style ? undefined : { ...ours, ...style };

  // Digdir narrows variant in TS but the runtime forwards verbatim to
  // data-variant, so 'soft' flows through. data-shape isn't part of Digdir's
  // prop type, so route both via a generic spread.
  const extra: Record<string, unknown> = {};
  if (variant !== undefined) extra.variant = variant;
  if (shape === 'pill') extra['data-shape'] = 'pill';
  return <DigDirButton ref={ref} {...rest} {...extra} style={mergedStyle} />;
});

Button.displayName = 'Button';
