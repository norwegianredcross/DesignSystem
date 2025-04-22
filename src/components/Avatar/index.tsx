import React, { forwardRef } from 'react';
import {
  Avatar as DigDirAvatar,
  type AvatarProps as DigDirAvatarProps,
} from '@digdir/designsystemet-react';

export interface AvatarProps extends DigDirAvatarProps {}

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>((props, ref) => {
  return <DigDirAvatar ref={ref} {...props} />;
});

Avatar.displayName = 'Avatar';