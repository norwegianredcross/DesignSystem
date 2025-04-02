import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig, loadEnv } from 'vite';

const config: StorybookConfig = {
  stories: [
    "../src/stories/**/*.stories.@(js|jsx|ts|tsx)", // Include all story files
    "../src/stories/**/*.mdx" // Include MDX files for documentation
  ],

  addons: [// Add link navigation between stories
  // Essential addons like controls, actions, etc.
  "@storybook/addon-links", // Add interaction testing
  "@storybook/addon-essentials", // Accessibility testing
  "@storybook/addon-interactions", "@storybook/addon-a11y", '@storybook/addon-mdx-gfm', '@chromatic-com/storybook'],

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
              '/Users/michaelaavitsland/Desktop/DesignSystem/storybook/node_modules', // Allow node_modules
            ],
          },
          open: true, // Automatically open the browser
        },
        logLevel: 'info', // Enable detailed logging
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
  },

  docs: {
    autodocs: true
  },

  typescript: {
    reactDocgen: 'react-docgen-typescript'
  }
};

export default config;