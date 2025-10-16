import { forwardRef, ReactNode } from 'react';
import {
  Alert as DigDirAlert,
  type AlertProps as DigDirAlertProps,
} from '@digdir/designsystemet-react';

export interface AlertProps extends DigDirAlertProps {
  children?: ReactNode;
}

export const Alert = forwardRef<HTMLDivElement, AlertProps>((props, ref) => {
  return <DigDirAlert ref={ref} {...props} />;
});

Alert.displayName = 'Alert';