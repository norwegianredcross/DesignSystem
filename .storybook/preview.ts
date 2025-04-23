// .storybook/preview.ts
import type { Preview } from '@storybook/react';
import { themeDecorator } from './themeDecorator'; // Ensure this path is correct
import '@digdir/designsystemet-css/index.css'; // Digdir's base styles
import '../design-tokens-build/brand-1.css';   // Correct path (relative to .storybook)
import './storybook-font-override.css'; // Keep if needed

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [themeDecorator],
};

export const globals = {
  brand: {
    name: 'Brand',
    description: 'Select brand color theme',
    defaultValue: 'primary-brand',
    toolbar: {
      icon: 'circlehollow',
      items: [
        { value: 'primary-brand', title: 'Primary Brand' },
        { value: 'secondary-hav', title: 'Secondary Hav' },
        { value: 'secondary-jungel', title: 'Secondary Jungel' },
      ],
    },
  },
  mode: {
    name: 'Mode',
    description: 'Select color scheme (light/dark)',
    defaultValue: 'light',
    toolbar: {
      icon: 'sun',
      items: [
        { value: 'light', title: 'Light', icon: 'sun' },
        { value: 'dark', title: 'Dark', icon: 'moon' },
        { value: 'auto', title: 'Auto', icon: 'browser' },
      ],
    },
  },
};

export default preview;
