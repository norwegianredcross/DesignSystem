import React from 'react';

// Define props - allows passing className, style, etc.
interface IconProps extends React.SVGAttributes<SVGElement> {
  title?: string; // Optional title for accessibility
}

export const ChevronRightIcon: React.FC<IconProps> = ({ title, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    // Use '1em' to make the icon scale with the parent's font-size
    width="1em"
    height="1em"
    // Keep the original viewBox to maintain aspect ratio
    viewBox="0 0 28 28"
    // Set fill to none on the svg container itself
    fill="none"
    // Hide from screen readers if it's purely decorative (no title)
    aria-hidden={title ? undefined : true}
    // Prevent the SVG itself from being focusable
    focusable="false"
    // Spread any other props like className, style, etc.
    {...props}
  >
    {/* Add a title element for accessibility if a title is provided */}
    {title && <title>{title}</title>}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.048 6.96459C11.3897 6.62289 11.9437 6.62289 12.2854 6.96459L18.7021 13.3813C19.0438 13.723 19.0438 14.277 18.7021 14.6187L12.2854 21.0354C11.9437 21.3771 11.3897 21.3771 11.048 21.0354C10.7063 20.6937 10.7063 20.1396 11.048 19.7979L16.8459 14L11.048 8.20203C10.7063 7.86032 10.7063 7.3063 11.048 6.96459Z"
      // CRITICAL: Use "currentColor" so the icon inherits the button's text color
      fill="currentColor"
    />
  </svg>
);

// Optional: Add display name for easier debugging in React DevTools
ChevronRightIcon.displayName = 'ChevronRightIcon';