import React, { forwardRef } from 'react';
import {
  Alert as DigDirAlert,
  type AlertProps as DigDirAlertProps,
} from '@digdir/designsystemet-react';

// Define the props for your Alert component, extending DigDirAlertProps
export interface AlertProps extends DigDirAlertProps {
  // You can add any custom props here if needed
  // For now, we'll just directly use the DigDirAlertProps
}

export const Alert = forwardRef<HTMLDivElement, AlertProps>((props, ref) => {
  // We'll simply pass all props down to the DigDirAlert component
  return <DigDirAlert ref={ref} {...props} />;
});

Alert.displayName = 'Alert';