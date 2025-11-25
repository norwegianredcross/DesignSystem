import { forwardRef, ReactNode } from 'react';
import {
  Alert as DigDirAlert,
  type AlertProps as DigDirAlertProps,
} from '@digdir/designsystemet-react';

/**
 * Alert-komponent for å vise viktige meldinger til brukeren.
 * Utvider DigDir sin Alert med støtte for barn-elementer og tittel.
 */
export interface AlertProps extends DigDirAlertProps {
  children?: ReactNode;
  title?: string;
}

export const Alert = forwardRef<HTMLDivElement, AlertProps>((props, ref) => {
  return <DigDirAlert ref={ref} {...props} />;
});

Alert.displayName = 'Alert';