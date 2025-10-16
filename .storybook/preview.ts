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
      toolbar: {
        icon: 'sun',
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
        order: ['Designsystem', 'Components'],
      },
    },
  },
  decorators: [themeDecorator, customStylesDecorator],
};

export default preview;