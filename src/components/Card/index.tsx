import {
  Card as DigDirCard,
  type CardProps as DigDirCardProps,
  CardBlock as DigDirCardBlock, 
} from '@digdir/designsystemet-react';

export type CardProps = DigDirCardProps;
export const Card = DigDirCard;
export const CardBlock = DigDirCardBlock;

Card.displayName = 'Card';

