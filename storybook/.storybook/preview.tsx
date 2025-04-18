import type { Preview } from '@storybook/react';
import '../src/styles/global.css'; // Import your global CSS file
import React from 'react';

// Custom provider for global context or theming logic
const CustomProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div>{children}</div>;
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: 'var(--ds-color-neutral-background-default)' },
        { name: 'dark', value: 'var(--ds-color-neutral-background-tinted)' },
      ],
    },
  },
  decorators: [
    (Story) => (
      <CustomProvider>
        <Story />
      </CustomProvider>
    ),
  ],
};

export default preview;
