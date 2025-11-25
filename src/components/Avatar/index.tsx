import { forwardRef } from 'react';
import {
  Avatar as DigDirAvatar,
  type AvatarProps as DigDirAvatarProps,
} from '@digdir/designsystemet-react';


/**
 * Avatar-komponent for å vise profilbilde eller initialer.
 * Wrapper rundt DigDir sin Avatar.
 */
export type AvatarProps = DigDirAvatarProps;


export const Avatar = forwardRef<HTMLSpanElement, AvatarProps>((props, ref) => {
  return <DigDirAvatar ref={ref} {...props} />;
});

Avatar.displayName = 'Avatar';