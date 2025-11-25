import { forwardRef, ReactNode } from 'react';
import {
  ValidationMessage as DigDirHelpText,
  type ValidationMessageProps as DigDirHelpTextProps,
} from '@digdir/designsystemet-react';

/**
 * ValidationMessage-komponent for å vise valideringsfeil eller hjelpetekst.
 */
export interface ValidationMessageProps extends DigDirHelpTextProps {
  children?: ReactNode;
}

export const ValidationMessage = forwardRef<
  HTMLParagraphElement,
  ValidationMessageProps
>((props, ref) => {
  return <DigDirHelpText ref={ref} {...props} />;
});

ValidationMessage.displayName = 'ValidationMessage';
