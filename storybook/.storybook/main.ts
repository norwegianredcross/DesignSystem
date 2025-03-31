import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig, loadEnv } from 'vite';

const config: StorybookConfig = {
  stories: [
    "../src/stories/**/*.stories.@(js|jsx|ts|tsx)", // Include all story files
    "../src/stories/**/*.mdx" // Include MDX files for documentation
  ],
  addons: [
    "@storybook/addon-links", // Add link navigation between stories
    "@storybook/addon-essentials", // Essential addons like controls, actions, etc.
    "@storybook/addon-interactions", // Add interaction testing
    "@storybook/addon-a11y" // Accessibility testing
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {}
  },
  viteFinal: async (config, { configType }) => {
    try {
      // Load environment variables
      const env = loadEnv(configType === 'PRODUCTION' ? 'production' : 'development', process.cwd());

      // Merge custom Vite configuration
      return mergeConfig(config, {
        resolve: {
          alias: {
            '@': '/Users/michaelaavitsland/Desktop/DesignSystem/designsystemet-demo/src', // Alias for src directory
            'design-tokens-build': '/Users/michaelaavitsland/Desktop/DesignSystem/design-tokens-build', // Alias for design tokens
          },
        },
        server: {
          fs: {
            allow: [
              '/Users/michaelaavitsland/Desktop/DesignSystem/design-tokens-build', // Allow design tokens
              '/Users/michaelaavitsland/Desktop/DesignSystem/storybook/src', // Allow entire src directory
              '/Users/michaelaavitsland/Desktop/DesignSystem/storybook/src/styles', // Allow styles directory
              '/Users/michaelaavitsland/Desktop/DesignSystem/storybook/node_modules/@digdir/designsystemet-css', // Allow designsystemet-css
              '/Users/michaelaavitsland/Desktop/DesignSystem/storybook/node_modules/@digdir/designsystemet-theme', // Allow designsystemet-theme
              '/Users/michaelaavitsland/Desktop/DesignSystem/storybook/.storybook', // Allow Storybook config
              '/Users/michaelaavitsland/Desktop/DesignSystem/storybook/node_modules', // Allow node_modules
              '/Users/michaelaavitsland/Desktop/DesignSystem/storybook', // Allow Storybook root
            ],
          },
        },
        optimizeDeps: {
          include: ['@digdir/designsystemet-react'], // Pre-bundle @digdir/designsystemet-react
          exclude: ['@digdir/designsystemet-css', '@digdir/designsystemet-theme'], // Exclude these packages
        },
        define: {
          'process.env': env, // Pass environment variables to the client
        },
      });
    } catch (error) {
      console.error('Error in viteFinal configuration:', error);
      throw error;
    }
  }
};

export default config;