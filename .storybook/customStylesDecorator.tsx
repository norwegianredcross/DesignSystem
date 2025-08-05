import type { Decorator } from '@storybook/react';

export const customStylesDecorator: Decorator = (Story, context) => {
  const customStyles = context.parameters?.customStyles;
  
  return (
    <div data-storybook-decorator style={customStyles}>
      <Story />
    </div>
  );
};