import { forwardRef } from 'react';
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

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>((props, ref) => {
  return <DigDirBadge ref={ref} {...props} />;
});
Badge.displayName = 'Badge';
export const BadgePosition: typeof DigDirBadgePosition = DigDirBadgePosition;
