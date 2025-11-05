// .storybook/preview.ts
import './style.css';
import type { Preview } from '@storybook/react-vite';
import { customStylesDecorator } from '../src/story-utils/customStylesDecorator';
import { transformSource } from '../src/story-utils/transformSource';
import { themeDecorator } from './themeDecorator';

import 'rk-design-tokens/design-tokens-build/theme.css';
import '@digdir/designsystemet-css/index.css';

const preview: Preview = {
  globalTypes: {
    codePreview: {
      description: '"Show code" will output the selected format',
      toolbar: {
        icon: 'markup',
        items: [
          { title: 'HTML', value: 'html' },
          { title: 'React', value: 'react' },
        ],
        dynamicTitle: true,
      },
    },
    brand: {
      name: 'Brand',
      description: 'Select brand color theme',
      toolbar: {
        icon: 'paintbrush',
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
      toolbar: {
        icon: 'mirror',
        items: [
          { value: 'light', title: 'Light', icon: 'sun' },
          { value: 'dark', title: 'Dark', icon: 'moon' },
          { value: 'auto', title: 'Auto', icon: 'browser' },
        ],
      },
    },
  },
  initialGlobals: {
    codePreview: 'react',
    brand: 'primary-brand',
    mode: 'light',
  },
  parameters: {
    layout: 'centered',
    viewMode: 'docs',
    docs: {
      codePanel: true,
      source: {
        transform: transformSource,
        type: 'auto',
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      storySort: {
        method: 'alphabetical',
        order: [
          'Designsystem',
          [
            'Introduksjon',
            'Kom i gang (Getting Started)',
            'Farger (Colors)',
            'Typografi (Typography)',
            'Tilgjengelighet (Accessibility)',
            '*',
          ],
          'Components',
          '*',
        ],
      },
    },
  },
  tags: ['autodocs'],
  decorators: [themeDecorator, customStylesDecorator],
};

export default preview;