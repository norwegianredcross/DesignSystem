import { forwardRef, ReactNode } from 'react';
import {
  Paragraph as DigDirParagraph,
  type ParagraphProps as DigDirParagraphProps,
} from '@digdir/designsystemet-react';

/**
 * Paragraph-komponent for avsnittstekst.
 */
export interface ParagraphProps extends DigDirParagraphProps {
  children?: ReactNode;
}

export const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(
  (props, ref) => {
    return <DigDirParagraph ref={ref} {...props} />;
  },
);

Paragraph.displayName = 'Paragraph';