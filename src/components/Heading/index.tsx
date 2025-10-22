import { forwardRef, ReactNode } from 'react';
import {
  Heading as DigDirHeading,
  type HeadingProps as DigDirHeadingProps,
} from '@digdir/designsystemet-react';

export interface HeadingProps extends DigDirHeadingProps {
  children?: ReactNode;
}

// Rename the component and change the ref type
export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>((props, ref) => {
  // The ref type HTMLHeadingElement now matches the DigDirHeading
  return <DigDirHeading ref={ref} {...props} />;
});

// This line is now correct
Heading.displayName = 'Heading';