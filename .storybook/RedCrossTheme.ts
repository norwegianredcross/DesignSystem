// .storybook/RedCrossTheme.ts

import { create } from '@storybook/theming/create';

export default create({
  base: 'light',

  // Typography
  fontBase: '"Source Sans 3", sans-serif',
  fontCode: 'monospace',

  // Brand Identity
  brandTitle: 'Røde Kors Designsystem',
  brandUrl: 'https://www.rodekors.no',
  brandImage: '/logo-red-cross.svg', // We'll add this logo in the next step
  brandTarget: '_self',

  // --- Colors ---
  // Main colors for the UI
  colorPrimary: '#242424', // A neutral dark color for active UI elements
  colorSecondary: '#C8102E', // The iconic Red Cross red for emphasis

  // UI Backgrounds
  appBg: '#F8F8F8', // A very light grey for the main background
  appContentBg: '#FFFFFF', // Background for content areas
  appPreviewBg: '#FFFFFF', // Background for the component preview canvas
  appBorderColor: '#D9D9D9',
  appBorderRadius: 4,

  // Text
  textColor: '#242424',
  textInverseColor: '#FFFFFF',

  // Toolbar
  barTextColor: '#555555',
  barSelectedColor: '#C8102E', // Red for the active toolbar item
  barBg: '#FFFFFF',

  // Form Controls
  inputBg: '#FFFFFF',
  inputBorder: '#BDBDBD',
  inputTextColor: '#242424',
  inputBorderRadius: 4,
});