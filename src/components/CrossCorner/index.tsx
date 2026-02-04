import { forwardRef, useEffect } from 'react';
import type { DefaultProps } from '../../types';
import type { MergeRight } from '../../utilities';
import styles from './styles.module.css';

// Fallback CSS injection function
function buildInlineCss(s: Record<string, string>): string {
  return `
.${s.crossCorner} {
  display: inline-block;
  flex-shrink: 0;
}
.${s.shape} {
  fill: var(--ds-color-base-default, #DA4236);
}
/* Color variants via data-color attribute */
.${s.crossCorner}[data-color="accent"] .${s.shape} {
  fill: var(--ds-color-accent-base-default, #DA4236);
}
.${s.crossCorner}[data-color="brand1"] .${s.shape} {
  fill: var(--ds-color-brand1-base-default, #DA4236);
}
.${s.crossCorner}[data-color="brand2"] .${s.shape} {
  fill: var(--ds-color-brand2-base-default, #1E2B3C);
}
.${s.crossCorner}[data-color="brand3"] .${s.shape} {
  fill: var(--ds-color-brand3-base-default, #F5F5F5);
}
.${s.crossCorner}[data-color="neutral"] .${s.shape} {
  fill: var(--ds-color-neutral-base-default, #5D5D5D);
}
`;
}

/**
 * Position variants for the CrossCorner component.
 * Determines which corner the L-shape points to.
 */
export type CrossCornerPosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

/**
 * Size variants for the CrossCorner component.
 * sm: 48px, md: 68px (default from Figma), lg: 96px
 */
export type CrossCornerSize = 'sm' | 'md' | 'lg';

/**
 * Props for the CrossCorner component.
 */
export type CrossCornerProps = MergeRight<
  DefaultProps,
  {
    /**
     * Which corner the graphic points to.
     * @default 'top-left'
     */
    position?: CrossCornerPosition;
    /**
     * Size of the graphic.
     * sm: 48px, md: 68px, lg: 96px
     * @default 'md'
     */
    size?: CrossCornerSize;
    /**
     * Optional CSS class name.
     */
    className?: string;
    /**
     * Accessible label for the decorative graphic.
     * Set to empty string if purely decorative.
     */
    'aria-label'?: string;
    /**
     * Whether the graphic is hidden from assistive technologies.
     * @default true (decorative by default)
     */
    'aria-hidden'?: boolean;
  }
>;

const SIZE_MAP: Record<CrossCornerSize, number> = {
  sm: 48,
  md: 68,
  lg: 96,
};

const ROTATION_MAP: Record<CrossCornerPosition, number> = {
  'top-left': 270,
  'top-right': 0,
  'bottom-right': 90,
  'bottom-left': 180,
};

/**
 * CrossCorner - Decorative L-shaped brand graphic element.
 *
 * Used as a visual accent across Røde Kors web projects.
 * The shape forms part of the cross pattern and can be positioned
 * in any corner orientation.
 */
export const CrossCorner = forwardRef<SVGSVGElement, CrossCornerProps>(
  (
    {
      position = 'top-left',
      size = 'md',
      className,
      'aria-label': ariaLabel,
      'aria-hidden': ariaHidden = true,
      'data-color': dataColor,
      'data-size': dataSize,
      ...rest
    },
    ref
  ) => {
    // Fallback: inject minimal CrossCorner styles if consumer did not import the CSS bundle.
    useEffect(() => {
      const styleId = 'rk-crosscorner-inline-styles';
      if (typeof document === 'undefined') return;
      if (document.getElementById(styleId)) return;
      const css = buildInlineCss(styles);
      const tag = document.createElement('style');
      tag.id = styleId;
      tag.textContent = css;
      document.head.appendChild(tag);
    }, []);

    const pixelSize = SIZE_MAP[size];
    const rotation = ROTATION_MAP[position];

    return (
      <svg
        ref={ref}
        className={`${styles.crossCorner} ${className || ''}`}
        width={pixelSize}
        height={pixelSize}
        viewBox="0 0 68 68"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label={ariaLabel}
        aria-hidden={ariaHidden}
        role={ariaHidden ? undefined : 'img'}
        data-color={dataColor}
        data-size={dataSize}
        style={{
          transform: rotation ? `rotate(${rotation}deg)` : undefined,
        }}
        {...rest}
      >
        <path
          d="M68 0V33.8203H67.998V68H34.1777V33.8203H0V0H68Z"
          className={styles.shape}
        />
      </svg>
    );
  }
);

CrossCorner.displayName = 'CrossCorner';
