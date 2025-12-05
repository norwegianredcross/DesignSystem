import type { Decorator } from '@storybook/react';

export const paddingDecorator: Decorator = (Story) => {
  return (
    <div style={{ 
      paddingTop: '20px', // Reduced since global padding is handling some
      paddingLeft: '0', 
      paddingRight: '0',
      fontFamily: 'var(--ds-font-family, "Source Sans 3", sans-serif)',
      width: '100%',
      maxWidth: '100%'
    }}>
      <Story />
    </div>
  );
};

