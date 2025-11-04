import { create } from 'storybook/theming';

export default create({
  base: 'light',

  // Typography
  fontBase: '"Source Sans 3", sans-serif',
  fontCode: 'monospace',

  // Brand Identity
  brandTitle: 'Røde Kors Designsystem',
  brandUrl: 'https://www.rodekors.no',
  brandImage: 'logo-red-cross.svg',
  brandTarget: '_self',

  // --- Colors ---
  colorPrimary: '#242424',
  colorSecondary: '#C8102E',

  // UI Backgrounds
  appBg: '#F8F8F8',
  appContentBg: '#FFFFFF',
  appPreviewBg: '#FFFFFF',
  appBorderColor: '#D9D9D9',
  appBorderRadius: 4,

  // Text
  textColor: '#242424',
  textInverseColor: '#FFFFFF',

  // Toolbar
  barTextColor: '#555555',
  barSelectedColor: '#C8102E',
  barBg: '#FFFFFF',

  // Form Controls
  inputBg: '#FFFFFF',
  inputBorder: '#BDBDBD',
  inputTextColor: '#242424',
  inputBorderRadius: 4,
});