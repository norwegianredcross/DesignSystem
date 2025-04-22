import React from 'react';
import {
  Card as DigDirCard,
  type CardProps as DigDirCardProps,
  CardBlock as DigDirCardBlock, // Need Card.Block for examples
  // Import other parts if needed, like CardHeader, CardFooter, etc.
} from '@digdir/designsystemet-react';

// Directly export the type from Digdir
export type CardProps = DigDirCardProps;

// Directly export the component from Digdir
export const Card = DigDirCard;

// Export sub-components needed for composition
export const CardBlock = DigDirCardBlock;

// Optional: If you still want a consistent display name
Card.displayName = 'Card';
