import { GraphicElement } from '../GraphicElement';
import type { GraphicElementProps, GraphicElementPosition, GraphicElementSize } from '../GraphicElement';

/**
 * CrossCorner - Deprecated alias for GraphicElement.
 *
 * Bruk GraphicElement i stedet. CrossCorner er videreført som et alias for
 * GraphicElement og fjernes i en fremtidig versjon. Merk: den gamle
 * CrossCorner-formen tilsvarer `shape="angle"` i GraphicElement; standard
 * `shape="corner"` er en annen form.
 *
 * @deprecated Bruk GraphicElement.
 */
export const CrossCorner = GraphicElement;

/** @deprecated Bruk GraphicElementProps. */
export type CrossCornerProps = GraphicElementProps;

/** @deprecated Bruk GraphicElementPosition. */
export type CrossCornerPosition = GraphicElementPosition;

/** @deprecated Bruk GraphicElementSize. */
export type CrossCornerSize = GraphicElementSize;
