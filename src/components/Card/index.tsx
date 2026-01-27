import {
  Card as DigDirCard,
  type CardProps as DigDirCardProps,
  CardBlock as DigDirCardBlock, 
} from '@digdir/designsystemet-react';

/**
 * Card-komponent for innholdskort.
 */
export type CardProps = DigDirCardProps;
export const Card: typeof DigDirCard = DigDirCard;
export const CardBlock: typeof DigDirCardBlock = DigDirCardBlock;

Card.displayName = 'Card';

