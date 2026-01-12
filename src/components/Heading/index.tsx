import { forwardRef, ReactNode } from 'react';
import {
  Heading as DigDirHeading,
  type HeadingProps as DigDirHeadingProps,
} from '@digdir/designsystemet-react';

/**
 * Heading-komponent for overskrifter.
 */
export interface HeadingProps extends DigDirHeadingProps {
  /** Required: Semantic heading level (1-6) */
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children?: ReactNode;
}

// Omdøper komponenten og endrer ref-typen
export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>((props, ref) => {
  // Ref-typen HTMLHeadingElement matcher nå DigDirHeading
  return <DigDirHeading ref={ref} {...props} />;
});

// Denne linjen er nå korrekt
Heading.displayName = 'Heading';