// .storybook/preview.ts
import './style.css';
import type { Preview } from '@storybook/react-vite';
// import { themeDecorator } from './themeDecorator'; // <-- THIS IMPORT IS NOW COMMENTED OUT/REMOVED
import { customStylesDecorator } from '../src/story-utils/customStylesDecorator';
import { transformSource } from '../src/story-utils/transformSource';

// CSS imports
import '@digdir/designsystemet-css/index.css'; // Digdir's base styles
import "rk-design-tokens/design-tokens-build/brand-1.css";
import './storybook-font-override.css'; // Keep if needed

const preview: Preview = {
  globalTypes: {
    // React/HTML code preview tabs
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
    // Removed brand control
    // brand: {
    //   name: 'Brand',
    //   description: 'Select brand color theme',
    //   toolbar: {
    //     icon: 'circlehollow',
    //     items: [
    //       { value: 'primary-brand', title: 'Primary Brand' },
    //       { value: 'secondary-hav', title: 'Secondary Hav' },
    //       { value: 'secondary-jungel', title: 'Secondary Jungel' },
    //     ],
    //   },
    // },
    // Removed mode control
    // mode: {
    //   name: 'Mode',
    //   description: 'Select color scheme (light/dark)',
    //   toolbar: {
    //     icon: 'sun',
    //     items: [
    //       { value: 'light', title: 'Light', icon: 'sun' },
    //       { value: 'dark', title: 'Dark', icon: 'moon' },
    //       { value: 'auto', title: 'Auto', icon: 'browser' },
    //     ],
    //   },
    // },
  },
  initialGlobals: {
    codePreview: 'react',
    // Removed initial brand and mode settings
    // brand: 'primary-brand',
    // mode: 'light',
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
          'Components',
        ],
      },
    },
  },
  decorators: [
    // themeDecorator, // <-- THIS LINE MUST BE COMMENTED OUT or REMOVED
    customStylesDecorator, // Keep this if it's unrelated to theme/mode
  ],
};

export default preview;