import { forwardRef, type ForwardRefExoticComponent, type PropsWithoutRef, type RefAttributes } from 'react';
import {
  Badge as DigDirBadge,
  type BadgeProps as DigDirBadgeProps,
  BadgePosition as DigDirBadgePosition,
  type BadgePositionProps as DigDirBadgePositionProps,
} from '@digdir/designsystemet-react';

/**
 * Badge-komponent for å vise status eller antall.
 */
export type BadgeProps = DigDirBadgeProps;
export type BadgePositionProps = DigDirBadgePositionProps;

// The explicit annotation fixes declaration emit (TS2742): when left inferred,
// TypeScript tries to name Digdir-internal helper types from
// 'designsystemet-react/dist/types/types' — a path that doesn't exist for
// consumers — and the type roll-up then leaves broken './components/Badge'
// imports in the published index.d.ts.
export const Badge: ForwardRefExoticComponent<
  PropsWithoutRef<BadgeProps> & RefAttributes<HTMLSpanElement>
> = forwardRef<HTMLSpanElement, BadgeProps>((props, ref) => {
  return <DigDirBadge ref={ref} {...props} />;
});
Badge.displayName = 'Badge';
export const BadgePosition: typeof DigDirBadgePosition = DigDirBadgePosition;
