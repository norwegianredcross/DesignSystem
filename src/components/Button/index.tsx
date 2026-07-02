import {
  Button as DigDirButton,
} from '@digdir/designsystemet-react';
import type { Color, SeverityColors } from '@digdir/designsystemet-types';
import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary';

/**
 * Props mirror @digdir/designsystemet-react Button.
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
   * Color treatment.
   * @default 'primary'
   */
  variant?: ButtonVariant;
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

// Appearance (colors, border radius) is owned by the design tokens
// (rk-design-tokens) — no component-level style overrides.
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant, ...rest },
  ref,
) {
  return <DigDirButton ref={ref} variant={variant} {...rest} />;
});

Button.displayName = 'Button';
