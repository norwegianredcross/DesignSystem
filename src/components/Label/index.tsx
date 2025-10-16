import { forwardRef, ReactNode } from 'react';
import {
  Label as DigDirLabel,
  type LabelProps as DigDirLabelProps,
} from '@digdir/designsystemet-react';

export interface LabelProps extends DigDirLabelProps {
  children?: ReactNode;
}

export const Label = forwardRef<HTMLLabelElement, LabelProps>((props, ref) => {
  return <DigDirLabel ref={ref} {...props} />;
});

Label.displayName = 'Label';