import React from 'react';

// Definer props - tillater sending av className, style, etc.
interface IconProps extends React.SVGAttributes<SVGElement> {
  title?: string; // Valgfri tittel for tilgjengelighet
}

export const ChevronRightIcon: React.FC<IconProps> = ({ title, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    // Bruk '1em' for å få ikonet til å skalere med forelderens font-størrelse
    width="1em"
    height="1em"
    // Behold original viewBox for å opprettholde sideforhold
    viewBox="0 0 28 28"
    // Sett fill til none på selve svg-containeren
    fill="none"
    // Skjul for skjermlesere hvis det er rent dekorativt (ingen tittel)
    aria-hidden={title ? undefined : true}
    // Hindre at selve SVG-en blir fokuserbar
    focusable="false"
    // Spre andre props som className, style, etc.
    {...props}
  >
    {/* Legg til et tittel-element for tilgjengelighet hvis en tittel er gitt */}
    {title && <title>{title}</title>}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.048 6.96459C11.3897 6.62289 11.9437 6.62289 12.2854 6.96459L18.7021 13.3813C19.0438 13.723 19.0438 14.277 18.7021 14.6187L12.2854 21.0354C11.9437 21.3771 11.3897 21.3771 11.048 21.0354C10.7063 20.6937 10.7063 20.1396 11.048 19.7979L16.8459 14L11.048 8.20203C10.7063 7.86032 10.7063 7.3063 11.048 6.96459Z"
      // KRITISK: Bruk "currentColor" slik at ikonet arver knappens tekstfarge
      fill="currentColor"
    />
  </svg>
);

// Valgfritt: Legg til display name for enklere debugging i React DevTools
ChevronRightIcon.displayName = 'ChevronRightIcon';