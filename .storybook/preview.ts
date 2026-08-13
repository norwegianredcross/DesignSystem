// .storybook/preview.ts
import './style.css';
import type { Preview } from '@storybook/react-vite';
import { customStylesDecorator } from '../src/story-utils/customStylesDecorator';
import { transformSource } from '../src/story-utils/transformSource';
import { themeDecorator } from './themeDecorator';
import { paddingDecorator } from './paddingDecorator';

import '../src/index.css';
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
        // These values are stamped as data-color on the preview root and
        // MUST match the scopes defined in rk-design-tokens' theme.css.
        // The old names (primary-brand, secondary-hav, ...) matched no
        // scope, so the generic --ds-color-* tokens silently fell back to
        // theme defaults and Storybook rendered off-palette compared to
        // the documentation platform.
        items: [
          { value: 'primary-color-red', title: 'Primary Red' },
          { value: 'secondary-color-orange', title: 'Secondary Orange' },
          { value: 'secondary-color-rust', title: 'Secondary Rust' },
          { value: 'secondary-color-pink', title: 'Secondary Pink' },
          { value: 'additional-color-ocean', title: 'Additional Ocean' },
          { value: 'additional-color-jungle', title: 'Additional Jungle' },
          { value: 'neutral', title: 'Neutral' },
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
    brand: 'primary-color-red',
    mode: 'light',
  },
  parameters: {
    layout: 'padded', // Changed from 'centered' to allow padding control
    viewMode: 'docs',
    docs: {
      codePanel: true,
      source: {
        transform: transformSource,
        type: 'auto',
      },
    },
    a11y: {
      test: 'error',
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
  tags: ['autodocs', 'a11y-test'],
  decorators: [themeDecorator, customStylesDecorator, paddingDecorator],
};

export default preview;