import { forwardRef } from 'react';
import type { DefaultProps } from '../../types';
import type { MergeRight } from '../../utilities';
import styles from './styles.module.css';

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
