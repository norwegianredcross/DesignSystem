import { forwardRef, useEffect } from 'react';
import type { Color, DefaultProps } from '../../types';
import type { MergeRight } from '../../utilities';
import styles from './styles.module.css';

// Fallback CSS injection function
function buildInlineCss(s: Record<string, string>): string {
  return `
.${s.graphicElement} {
  display: inline-block;
  flex-shrink: 0;
  --graphic-element-color: var(--ds-color-base-default, #DA4236);
  --graphic-element-face-front: var(--ds-color-border-subtle, #EEABA6);
  --graphic-element-face-top: var(--ds-color-surface-active, #E5776F);
}
/* data-color scoping: the theme's [data-color] scopes swap the generic
   --ds-color-* variables, so no per-ramp rules are needed here. */
.${s.shape} {
  fill: var(--graphic-element-color);
}
/* Outline variant: thin stroke, no fill */
.${s.graphicElement}[data-variant="outline"] {
  overflow: visible;
}
.${s.graphicElement}[data-variant="outline"] .${s.shape} {
  fill: none;
  stroke: var(--graphic-element-color);
  stroke-width: 2px;
}
/* Isometric variant: three token-driven cube faces */
.${s.faceFront} {
  fill: var(--graphic-element-face-front);
}
.${s.faceTop} {
  fill: var(--graphic-element-face-top);
}
.${s.faceRight} {
  fill: var(--graphic-element-color);
}
`;
}

/**
 * Shape variants for the GraphicElement component.
 * All shapes are derived from the same base grid as the cross:
 * compositions of the cross's arm squares (grid unit = one arm width).
 */
export type GraphicElementShape =
  | 'corner'
  | 'square'
  | 'angle'
  | 'heart'
  | 'tee'
  | 'bar'
  | 'cross';

/**
 * Style variants for the GraphicElement component.
 * solid: filled grid cells. outline: thin ~2px open strokes on a
 * subset of the grid cell edges (not a closed contour).
 * isometric: each grid cell becomes an isometric unit cube with three
 * token-driven faces (front = light, top = mid, right = dark).
 * The isometric variant is available for the shapes square, corner,
 * angle, heart and bar - see GraphicElementIsoShape.
 */
export type GraphicElementVariant = 'solid' | 'outline' | 'isometric';

/**
 * Shapes available in the isometric variant.
 */
export type GraphicElementIsoShape = 'square' | 'corner' | 'angle' | 'heart' | 'bar';

/** Faces of the isometric variant. */
type GraphicElementIsoFace = 'front' | 'top' | 'right';

/** Isometric geometry: tight viewBox plus faces in back-to-front order. */
type IsoGeometry = {
  w: number;
  h: number;
  faces: { face: GraphicElementIsoFace; d: string }[];
};

/**
 * Position variants for the GraphicElement component.
 * Determines the rotation/orientation of the shape.
 * For `shape="corner"` it is which corner the L-shape points to.
 */
export type GraphicElementPosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

/**
 * Size variants for the GraphicElement component.
 * Refers to the base grid: for the 2x2 `corner` shape,
 * sm: 48px, md: 68px, lg: 96px.
 * Shapes spanning more or fewer grid cells scale proportionally,
 * so the arm square stays the same size across shapes.
 */
export type GraphicElementSize = 'sm' | 'md' | 'lg';

/**
 * Props for the GraphicElement component.
 *
 * `variant` and `shape` form a union: the isometric variant only
 * accepts the shapes in GraphicElementIsoShape, enforced at compile time.
 */
export type GraphicElementProps = MergeRight<
  DefaultProps,
  {
    /**
     * Orientation of the shape.
     * For solid and outline: which corner the graphic points to.
     * For isometric: selects between standing (top-*) and lying
     * (bottom-*) orientations for corner and angle, and between
     * vertical (top-left/bottom-right) and horizontal
     * (top-right/bottom-left) for bar.
     * @default 'top-left'
     */
    position?: GraphicElementPosition;
    /**
     * Size of the graphic (base grid size).
     * For the corner shape: sm: 48px, md: 68px, lg: 96px.
     * @default 'md'
     */
    size?: GraphicElementSize;
    /**
     * Color scope from the theme (rk-design-tokens). Available scopes:
     * 'primary-color-red' (the default resolved value when inheriting
     * from the surrounding scope), 'secondary-color-orange',
     * 'secondary-color-rust', 'secondary-color-pink',
     * 'additional-color-ocean', 'additional-color-jungle' and 'neutral'.
     */
    'data-color'?: Color;
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
  } & (
    | {
        /**
         * Visual style: filled (solid) or thin stroke (outline).
         * @default 'solid'
         */
        variant?: 'solid' | 'outline';
        /**
         * Which graphic element to render. All shapes are derived from
         * the same base form: the arms of the cross.
         * @default 'corner'
         */
        shape?: GraphicElementShape;
        mirrored?: never;
      }
    | {
        /**
         * Isometric 3D variant: the shape built from unit cubes with
         * three token-driven faces. Available for the shapes square,
         * corner, angle, heart and bar.
         */
        variant: 'isometric';
        /**
         * Shapes available in the isometric variant.
         * @default 'corner'
         */
        shape?: Exclude<GraphicElementIsoShape, 'heart'>;
        mirrored?: never;
      }
    | {
        variant: 'isometric';
        shape: 'heart';
        /**
         * Mirrors the heart so the depth faces left instead of right.
         * Only applies to the isometric heart.
         * @default false
         */
        mirrored?: boolean;
      }
  )
>;

/**
 * Pixel size of a single grid cell (one cross arm square) per size.
 * Derived from the original CrossCorner sizes (48/68/96 for a 2x2 grid).
 */
const UNIT_MAP: Record<GraphicElementSize, number> = {
  sm: 24,
  md: 34,
  lg: 48,
};

const ROTATION_MAP: Record<GraphicElementPosition, number> = {
  'top-left': 270,
  'top-right': 0,
  'bottom-right': 90,
  'bottom-left': 180,
};

/**
 * Shape geometry. Every element is composed of unit squares (one cross
 * arm square, U = 34 viewBox units) placed on a grid.
 *
 * `solid` fills whole grid cells; `outline` draws partial open strokes
 * on specific cell edges (not closed contours).
 */
const SHAPE_MAP: Record<
  GraphicElementShape,
  { viewBoxW: number; viewBoxH: number; solid: string; outline: string }
> = {
  // One unit square. Outline: bottom edge only.
  square: {
    viewBoxW: 34,
    viewBoxH: 34,
    solid: 'M0 0H34V34H0V0Z',
    outline: 'M0 34H34',
  },
  // Three cells of a 2x2 grid with the TOP-LEFT cell missing:
  // (1,0), (0,1), (1,1). Outline: bottom + right edges (open step).
  corner: {
    viewBoxW: 68,
    viewBoxH: 68,
    solid: 'M34 0H68V68H0V34H34V0Z',
    outline: 'M0 68H68V0',
  },
  // The corner rotated -90deg: (0,0), (1,0), (1,1) - top bar plus the
  // bottom-right cell (this is the legacy CrossCorner form).
  // Outline: top + right edges.
  angle: {
    viewBoxW: 68,
    viewBoxH: 68,
    solid: 'M0 0H68V68H34V34H0V0Z',
    outline: 'M0 0H68V68',
  },
  // Three unit squares rotated 45deg (diamonds, radius 24 = U*sqrt(2)/2):
  // two side by side on top (centers (24,24) and (72,24)) and one
  // centered below/between them (center (48,48)). Their union forms
  // the angular heart. Outline: only the two bottom edges (open V).
  heart: {
    viewBoxW: 96,
    viewBoxH: 72,
    solid: 'M24 0L48 24L72 0L96 24L48 72L0 24L24 0Z',
    outline: 'M0 24L48 72L96 24',
  },
  // Four cells: a 3x1 row plus one center cell above it -
  // (1,0), (0,1), (1,1), (2,1). T pointing up.
  // Outline: 2U horizontal line with a 1U tick rising from its midpoint.
  tee: {
    viewBoxW: 102,
    viewBoxH: 68,
    solid: 'M34 0H68V34H102V68H0V34H34V0Z',
    outline: 'M17 68H85M51 34V68',
  },
  // Three cells in a row. Outline: bottom edge (one 3U line).
  bar: {
    viewBoxW: 102,
    viewBoxH: 34,
    solid: 'M0 0H102V34H0V0Z',
    outline: 'M0 34H102',
  },
  // Four cells with NO center cell: (1,0), (0,1), (2,1), (1,2) -
  // the gapped, checkerboard-style cross.
  // Outline: full-height vertical axis plus two 1U horizontal ticks,
  // leaving a gap over the (empty) center cell.
  cross: {
    viewBoxW: 102,
    viewBoxH: 102,
    solid:
      'M34 0H68V34H34V0ZM0 34H34V68H0V34ZM68 34H102V68H68V34ZM34 68H68V102H34V68Z',
    outline: 'M51 0V102M0 51H34M68 51H102',
  },
};

/**
 * Isometric geometries - one polygon set per supported orientation.
 * Each orientation is its own polygon set; a CSS rotation of an
 * isometric projection would break the face shading.
 *
 * Standing elements (wall plane): F(c,r) = (c*a, c*b + r*U) with
 * a = U*sqrt(3)/2, b = U/2; per cube: front face (light) always, top face
 * (mid) when no cell above, right face (dark) when no cell to the right.
 * Lying elements (ground plane): G(i,j) = ((i+j)*a, (i-j)*b); per cube:
 * top rhombus (mid) always, lower-left face (light) when no cell (i,j-1),
 * lower-right face (dark) when no cell (i+1,j).
 * Hearts: three upright iso rhombi plus horizontal depth bands (flat top
 * edge, mid V in the notch); the mirrored heart has depth to the left.
 * Faces are listed back-to-front so overlaps paint correctly.
 */
const ISO_GEOMETRY = {
  cube: {
    w: 58.89,
    h: 68,
    faces: [
      { face: 'top', d: 'M0 17L29.44 0L58.89 17L29.44 34Z' },
      { face: 'right', d: 'M29.44 34L58.89 17L58.89 51L29.44 68Z' },
      { face: 'front', d: 'M0 17L29.44 34L29.44 68L0 51Z' },
    ],
  },
  cornerStanding: {
    w: 88.33,
    h: 102,
    faces: [
      { face: 'top', d: 'M0 34L29.44 17L58.89 34L29.44 51Z' },
      { face: 'front', d: 'M0 34L29.44 51L29.44 85L0 68Z' },
      { face: 'right', d: 'M58.89 68L88.33 51L88.33 85L58.89 102Z' },
      { face: 'front', d: 'M29.44 51L58.89 68L58.89 102L29.44 85Z' },
      { face: 'top', d: 'M29.44 17L58.89 0L88.33 17L58.89 34Z' },
      { face: 'right', d: 'M58.89 34L88.33 17L88.33 51L58.89 68Z' },
      { face: 'front', d: 'M29.44 17L58.89 34L58.89 68L29.44 51Z' },
    ],
  },
  cornerLying: {
    w: 117.78,
    h: 85,
    faces: [
      { face: 'front', d: 'M0 17L29.44 34L29.44 68L0 51Z' },
      { face: 'top', d: 'M0 17L29.44 34L58.89 17L29.44 0Z' },
      { face: 'right', d: 'M88.33 34L117.78 17L117.78 51L88.33 68Z' },
      { face: 'top', d: 'M58.89 17L88.33 34L117.78 17L88.33 0Z' },
      { face: 'front', d: 'M29.44 34L58.89 51L58.89 85L29.44 68Z' },
      { face: 'right', d: 'M58.89 51L88.33 34L88.33 68L58.89 85Z' },
      { face: 'top', d: 'M29.44 34L58.89 51L88.33 34L58.89 17Z' },
    ],
  },
  angleStanding: {
    w: 88.33,
    h: 119,
    faces: [
      { face: 'top', d: 'M0 17L29.44 0L58.89 17L29.44 34Z' },
      { face: 'front', d: 'M0 17L29.44 34L29.44 68L0 51Z' },
      { face: 'right', d: 'M58.89 85L88.33 68L88.33 102L58.89 119Z' },
      { face: 'front', d: 'M29.44 68L58.89 85L58.89 119L29.44 102Z' },
      { face: 'top', d: 'M29.44 34L58.89 17L88.33 34L58.89 51Z' },
      { face: 'right', d: 'M58.89 51L88.33 34L88.33 68L58.89 85Z' },
      { face: 'front', d: 'M29.44 34L58.89 51L58.89 85L29.44 68Z' },
    ],
  },
  angleLying: {
    w: 88.33,
    h: 102,
    faces: [
      { face: 'right', d: 'M58.89 34L88.33 17L88.33 51L58.89 68Z' },
      { face: 'top', d: 'M29.44 17L58.89 34L88.33 17L58.89 0Z' },
      { face: 'front', d: 'M0 34L29.44 51L29.44 85L0 68Z' },
      { face: 'top', d: 'M0 34L29.44 51L58.89 34L29.44 17Z' },
      { face: 'front', d: 'M29.44 51L58.89 68L58.89 102L29.44 85Z' },
      { face: 'right', d: 'M58.89 68L88.33 51L88.33 85L58.89 102Z' },
      { face: 'top', d: 'M29.44 51L58.89 68L88.33 51L58.89 34Z' },
    ],
  },
  heart: {
    w: 102,
    h: 88.33,
    faces: [
      { face: 'front', d: 'M17 0L34 29.44L17 58.89L0 29.44Z' },
      { face: 'top', d: 'M17 0L51 0L68 29.44L34 29.44Z' },
      { face: 'right', d: 'M51 58.89L85 58.89L68 88.33L34 88.33Z' },
      { face: 'front', d: 'M34 29.44L51 58.89L34 88.33L17 58.89Z' },
      { face: 'right', d: 'M68 29.44L102 29.44L85 58.89L51 58.89Z' },
      { face: 'front', d: 'M51 0L68 29.44L51 58.89L34 29.44Z' },
      { face: 'top', d: 'M51 0L85 0L102 29.44L68 29.44Z' },
    ],
  },
  heartMirrored: {
    w: 102,
    h: 88.33,
    faces: [
      { face: 'front', d: 'M85 0L68 29.44L85 58.89L102 29.44Z' },
      { face: 'top', d: 'M85 0L51 0L34 29.44L68 29.44Z' },
      { face: 'right', d: 'M51 58.89L17 58.89L34 88.33L68 88.33Z' },
      { face: 'front', d: 'M68 29.44L51 58.89L68 88.33L85 58.89Z' },
      { face: 'right', d: 'M34 29.44L0 29.44L17 58.89L51 58.89Z' },
      { face: 'front', d: 'M51 0L34 29.44L51 58.89L68 29.44Z' },
      { face: 'top', d: 'M51 0L17 0L0 29.44L34 29.44Z' },
    ],
  },
  barHorizontal: {
    w: 117.78,
    h: 102,
    faces: [
      { face: 'top', d: 'M0 17L29.44 0L58.89 17L29.44 34Z' },
      { face: 'front', d: 'M0 17L29.44 34L29.44 68L0 51Z' },
      { face: 'top', d: 'M29.44 34L58.89 17L88.33 34L58.89 51Z' },
      { face: 'front', d: 'M29.44 34L58.89 51L58.89 85L29.44 68Z' },
      { face: 'top', d: 'M58.89 51L88.33 34L117.78 51L88.33 68Z' },
      { face: 'right', d: 'M88.33 68L117.78 51L117.78 85L88.33 102Z' },
      { face: 'front', d: 'M58.89 51L88.33 68L88.33 102L58.89 85Z' },
    ],
  },
  barVertical: {
    w: 58.89,
    h: 136,
    faces: [
      { face: 'right', d: 'M29.44 102L58.89 85L58.89 119L29.44 136Z' },
      { face: 'front', d: 'M0 85L29.44 102L29.44 136L0 119Z' },
      { face: 'right', d: 'M29.44 68L58.89 51L58.89 85L29.44 102Z' },
      { face: 'front', d: 'M0 51L29.44 68L29.44 102L0 85Z' },
      { face: 'top', d: 'M0 17L29.44 0L58.89 17L29.44 34Z' },
      { face: 'right', d: 'M29.44 34L58.89 17L58.89 51L29.44 68Z' },
      { face: 'front', d: 'M0 17L29.44 34L29.44 68L0 51Z' },
    ],
  },
} satisfies Record<string, IsoGeometry>;

/**
 * Orientation per position for the isometric variant.
 * corner/angle: top-* = standing, bottom-* = lying.
 * bar: top-right/bottom-left = horizontal, top-left/bottom-right = vertical
 * (consistent with the flat variants' 0/180 vs 90/270 degree rotations).
 * square and heart have a single orientation.
 */
const ISO_MAP: Record<GraphicElementIsoShape, Record<GraphicElementPosition, IsoGeometry>> = {
  square: {
    'top-left': ISO_GEOMETRY.cube,
    'top-right': ISO_GEOMETRY.cube,
    'bottom-left': ISO_GEOMETRY.cube,
    'bottom-right': ISO_GEOMETRY.cube,
  },
  corner: {
    'top-left': ISO_GEOMETRY.cornerStanding,
    'top-right': ISO_GEOMETRY.cornerStanding,
    'bottom-left': ISO_GEOMETRY.cornerLying,
    'bottom-right': ISO_GEOMETRY.cornerLying,
  },
  angle: {
    'top-left': ISO_GEOMETRY.angleStanding,
    'top-right': ISO_GEOMETRY.angleStanding,
    'bottom-left': ISO_GEOMETRY.angleLying,
    'bottom-right': ISO_GEOMETRY.angleLying,
  },
  heart: {
    'top-left': ISO_GEOMETRY.heart,
    'top-right': ISO_GEOMETRY.heart,
    'bottom-left': ISO_GEOMETRY.heart,
    'bottom-right': ISO_GEOMETRY.heart,
  },
  bar: {
    'top-left': ISO_GEOMETRY.barVertical,
    'top-right': ISO_GEOMETRY.barHorizontal,
    'bottom-left': ISO_GEOMETRY.barHorizontal,
    'bottom-right': ISO_GEOMETRY.barVertical,
  },
};

/** Grid unit in viewBox coordinates (one cross arm square). */
const VIEWBOX_UNIT = 34;

/** CSS module class per isometric face. */
const FACE_CLASS: Record<GraphicElementIsoFace, string> = {
  front: styles.faceFront,
  top: styles.faceTop,
  right: styles.faceRight,
};

/** Type guard: does the shape exist in the isometric variant? */
function isIsoShape(shape: GraphicElementShape): shape is GraphicElementIsoShape {
  return shape in ISO_MAP;
}

/**
 * GraphicElement - Decorative brand graphic elements derived from the cross.
 *
 * The four arms of the cross are split up and used as independent
 * graphic elements - angles, corners, hearts, bars - all derived from
 * the same base form. Used as visual accents across Røde Kors web
 * projects to create recognition, direction and cohesion.
 */
export const GraphicElement = forwardRef<SVGSVGElement, GraphicElementProps>(
  (
    {
      shape = 'corner',
      variant = 'solid',
      position = 'top-left',
      size = 'md',
      mirrored = false,
      className,
      'aria-label': ariaLabel,
      'aria-hidden': ariaHidden = true,
      'data-color': dataColor,
      'data-size': dataSize,
      ...rest
    },
    ref
  ) => {
    // Fallback: inject minimal GraphicElement styles if consumer did not import the CSS bundle.
    useEffect(() => {
      const styleId = 'rk-graphic-element-inline-styles';
      if (typeof document === 'undefined') return;
      if (document.getElementById(styleId)) return;
      const css = buildInlineCss(styles);
      const tag = document.createElement('style');
      tag.id = styleId;
      tag.textContent = css;
      document.head.appendChild(tag);
    }, []);

    const unit = UNIT_MAP[size];
    const geometry = SHAPE_MAP[shape];
    // Runtime guard for JS consumers bypassing the type union:
    // shapes without an isometric form fall back to solid.
    const iso =
      variant === 'isometric' && isIsoShape(shape)
        ? shape === 'heart' && mirrored
          ? ISO_GEOMETRY.heartMirrored
          : ISO_MAP[shape][position]
        : undefined;
    const effectiveVariant: GraphicElementVariant =
      variant === 'isometric' && !iso ? 'solid' : variant;
    if (variant === 'isometric' && !iso && import.meta.env.DEV) {
      console.warn(
        `GraphicElement: shape="${shape}" finnes ikke i isometrisk variant (kun ${Object.keys(
          ISO_MAP
        ).join(', ')}). Rendrer solid i stedet.`
      );
    }
    if (mirrored && !(variant === 'isometric' && shape === 'heart') && import.meta.env.DEV) {
      console.warn(
        'GraphicElement: `mirrored` gjelder kun variant="isometric" med shape="heart" og ignoreres her.'
      );
    }
    // Isometric orientations are dedicated polygon sets; no CSS rotation
    // is applied (rotating an isometric projection breaks the shading).
    const rotation = iso ? 0 : ROTATION_MAP[position];
    const viewBoxW = iso ? iso.w : geometry.viewBoxW;
    const viewBoxH = iso ? iso.h : geometry.viewBoxH;
    const width = Math.round((unit * viewBoxW) / VIEWBOX_UNIT);
    const height = Math.round((unit * viewBoxH) / VIEWBOX_UNIT);

    return (
      <svg
        ref={ref}
        className={`${styles.graphicElement} ${className || ''}`}
        width={width}
        height={height}
        viewBox={`0 0 ${viewBoxW} ${viewBoxH}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label={ariaLabel}
        aria-hidden={ariaHidden}
        role={ariaHidden ? undefined : 'img'}
        data-shape={shape}
        data-variant={effectiveVariant}
        data-color={dataColor}
        data-size={dataSize}
        style={{
          transform: rotation ? `rotate(${rotation}deg)` : undefined,
        }}
        {...rest}
      >
        {iso ? (
          iso.faces.map((face, index) => (
            <path key={index} d={face.d} className={FACE_CLASS[face.face]} />
          ))
        ) : (
          <path
            d={effectiveVariant === 'outline' ? geometry.outline : geometry.solid}
            className={styles.shape}
            vectorEffect="non-scaling-stroke"
          />
        )}
      </svg>
    );
  }
);

GraphicElement.displayName = 'GraphicElement';
