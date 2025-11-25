import {
  Button as DigDirButton,
  type ButtonProps as DigDirButtonProps,
} from '@digdir/designsystemet-react';

/**
 * Button-komponent som er en wrapper rundt DigDir sin Button.
 * Den støtter alle egenskaper fra DigDir sin Button.
 */
export type ButtonProps = DigDirButtonProps;
export const Button = DigDirButton;

Button.displayName = 'Button';