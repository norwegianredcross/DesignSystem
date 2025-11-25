import type { Decorator } from '@storybook/react';

/**
 * Dekoratør for å bruke egendefinerte stiler i Storybook.
 * Bruker 'customStyles' parameteren.
 */
export const customStylesDecorator: Decorator = (Story, context) => {
  const customStyles = context.parameters?.customStyles;
  
  return (
    <div data-storybook-decorator style={customStyles}>
      <Story />
    </div>
  );
};