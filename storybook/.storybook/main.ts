import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig, loadEnv } from 'vite';

const config: StorybookConfig = {
  stories: [
    "../src/stories/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/stories/**/*.mdx"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y"
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {}
  },
  viteFinal: async (config, { configType }) => {
    const env = loadEnv(configType === 'PRODUCTION' ? 'production' : 'development', process.cwd());
    return mergeConfig(config, {
      resolve: {
        alias: {
          '@': '/Users/michaelaavitsland/Desktop/DesignSystem/designsystemet-demo/src',
        },
      },
      optimizeDeps: {
        include: ['@digdir/designsystemet-react'],
        exclude: ['@digdir/designsystemet-css', '@digdir/designsystemet-theme'], // Exclude these packages
      },
      define: {
        'process.env': env,
      },
    });
  }
};

export default config;