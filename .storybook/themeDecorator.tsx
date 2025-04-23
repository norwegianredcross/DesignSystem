// .storybook/themeDecorator.ts
import React, { useEffect } from 'react';
import type { Decorator } from '@storybook/react';

export const themeDecorator: Decorator = (Story, context) => {
  const { brand, mode } = context.globals;

  // Get the root element where Storybook renders the story
  // or use document.documentElement for broader application
  const storyRoot = document.getElementById('storybook-root'); // Storybook 8+ uses 'storybook-root'
  // const storyRoot = document.getElementById('root'); // Older Storybook might use 'root'
  const rootElement = storyRoot || document.documentElement;

  useEffect(() => {
    // Apply the data attributes to the root element
    rootElement.setAttribute('data-color', brand || 'primary-brand');
    rootElement.setAttribute('data-color-scheme', mode || 'light');

    // Optional: Cleanup function if needed
    // return () => {
    //   rootElement.removeAttribute('data-color');
    //   rootElement.removeAttribute('data-color-scheme');
    // };
  }, [brand, mode, rootElement]); // Re-run effect when brand or mode changes

  // Render the actual story component
  return <Story {...context} />;
};
