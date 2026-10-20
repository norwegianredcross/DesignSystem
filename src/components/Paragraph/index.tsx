import { forwardRef, type ReactNode } from 'react';
import {
  Paragraph as DigDirParagraph,
  type ParagraphProps as DigDirParagraphProps,
} from '@digdir/designsystemet-react';
import styles from './styles.module.css';

/** Paragraph-komponent for avsnittstekst. */
export interface ParagraphProps extends DigDirParagraphProps {
  children?: ReactNode;
  /** Skriftvekt. Uten verdi brukes Digdirs standardvekt. */
  weight?: 'regular' | 'medium' | 'bold';
  /** Vis teksten i kursiv. Endrer ikke skriftvekten. */
  italic?: boolean;
}

export const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ weight, italic = false, className, ...props }, ref) => (
    <DigDirParagraph
      {...props}
      ref={ref}
      className={[styles.paragraph, className].filter(Boolean).join(' ')}
      data-weight={weight}
      data-italic={italic || undefined}
    />
  )
);

Paragraph.displayName = 'Paragraph';
