import type { Preview, StoryFn } from '@storybook/react';
import '@digdir/designsystemet-css';
import '@digdir/designsystemet-theme';
import '../src/styles/global.css'; // Import your global CSS file
import '../../design-tokens-build/theme.css'; // Import design tokens
import React from 'react';

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
};

const withTheme = (Story: StoryFn) => (
  <div data-typography="primary" data-color-scheme="light">
    <Story />
  </div>
);

export const decorators = [withTheme];

export default preview;
