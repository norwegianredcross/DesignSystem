// src/assets/images/ChevronLeftIcon.tsx
import React from 'react';

// Definer props - tillater sending av className, style, etc.
interface IconProps extends React.SVGAttributes<SVGElement> {
  title?: string; // Valgfri tittel for tilgjengelighet
}

export const ChevronLeftIcon: React.FC<IconProps> = ({ title, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em" // Skaler med font-størrelse
    height="1em"
    viewBox="0 0 28 28" // Behold original viewBox
    fill="none" // Container fyll
    aria-hidden={title ? undefined : true}
    focusable="false"
    {...props} // Spre andre props
  >
    {title && <title>{title}</title>}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      // Horisontalt speilet banedata fra ChevronRightIcon
      // Original Høyre: M 11.048 6.96... L 18.7021 13.38... L 12.2854 21.03... L 16.8459 14 L 11.048 8.20...
      // Speilet Venstre:   M 16.952 6.96... L 9.2979 13.38... L 15.7146 21.03... L 11.1541 14 L 16.952 8.20...
      // (Beregning: newX = viewBoxWidth - oldX = 28 - oldX)
      d="M16.952 6.96459C16.6103 6.62289 16.0563 6.62289 15.7146 6.96459L9.2979 13.3813C8.95621 13.723 8.95621 14.277 9.2979 14.6187L15.7146 21.0354C16.0563 21.3771 16.6103 21.3771 16.952 21.0354C17.2937 20.6937 17.2937 20.1396 16.952 19.7979L11.1541 14L16.952 8.20203C17.2937 7.86032 17.2937 7.3063 16.952 6.96459Z"
      fill="currentColor" // Arv farge fra forelder (knapp)
    />
  </svg>
);

ChevronLeftIcon.displayName = 'ChevronLeftIcon';

