import { Tag as DigDirTag } from '@digdir/designsystemet-react';
import type { Color, SeverityColors } from '@digdir/designsystemet-types';
import { forwardRef, type CSSProperties, type HTMLAttributes } from 'react';

export type TagVariant = 'default' | 'outline';
export type TagShape = 'squared' | 'rounded';

/**
 * Props mirror @digdir/designsystemet-react Tag and add a `shape` axis.
 * Built from `HTMLAttributes<HTMLSpanElement>` rather than `Omit<DigDirTagProps, …>`
 * — TS Omit on intersection-of-mapped types collapses the shape and loses
 * standard HTML attrs like `className`/`style`.
 */
export interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  /**
   * Color scheme. Follows Digdir's `data-color` cascade.
   */
  'data-color'?: Color | SeverityColors;
  /**
   * Changes size for descendant Designsystemet components.
   */
  'data-size'?: 'sm' | 'md' | 'lg';
  /**
   * Visual variant.
   * @default 'default'
   */
  variant?: TagVariant;
  /**
   * Geometry. `'rounded'` uses `--ds-border-radius-xl` (12px), matching the
   * Activity-Card style in Figma. `'squared'` keeps Digdir's default radius-sm.
   * @default 'squared'
   */
  shape?: TagShape;
}

export const Tag = forwardRef<HTMLSpanElement, TagProps>(function Tag(
  { shape, style, ...rest },
  ref,
) {
  // Digdir hardcodes border-radius (doesn't route through --dsc-tag-radius),
  // so shape has to set the property directly. Consumer's `style` wins.
  const ours: CSSProperties = {};
  if (shape === 'rounded') ours.borderRadius = 'var(--ds-border-radius-xl)';
  const mergedStyle: CSSProperties | undefined =
    Object.keys(ours).length === 0 && !style ? undefined : { ...ours, ...style };

  const extra: Record<string, unknown> = {};
  if (shape === 'rounded') extra['data-shape'] = 'rounded';
  return <DigDirTag ref={ref} {...rest} {...extra} style={mergedStyle} />;
});

Tag.displayName = 'Tag';
