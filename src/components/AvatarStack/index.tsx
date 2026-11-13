import { AvatarStack as DigdirAvatarStack } from '@digdir/designsystemet-react';

export type { AvatarStackProps } from '@digdir/designsystemet-react';

/**
 * Digdir's avatar stack. Supply list items with labelled avatars; prefer a short list and a trailing count.
 */
export const AvatarStack: typeof DigdirAvatarStack = DigdirAvatarStack;

/**
 * @deprecated AvatarStack is stable since Designsystemet 1.24. Use `AvatarStack`.
 */
export const EXPERIMENTAL_AvatarStack: typeof DigdirAvatarStack = DigdirAvatarStack;
