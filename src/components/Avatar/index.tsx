import { forwardRef, ReactNode } from 'react';
import {
  Avatar as DigDirAvatar,
  type AvatarProps as DigDirAvatarProps,
} from '@digdir/designsystemet-react';

export interface AvatarProps extends DigDirAvatarProps {
  children?: ReactNode;
  initials?: string;
  variant?: 'circle' | 'square';
}

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>((props, ref) => {
  return <DigDirAvatar ref={ref} {...props} />;
});

Avatar.displayName = 'Avatar';