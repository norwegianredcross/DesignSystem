import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig, loadEnv } from 'vite';
import path from 'path';

const config: StorybookConfig = {
  stories: [
    "../src/stories/**/*.stories.@(js|jsx|ts|tsx)", // Include all story files
    "../src/stories/**/*.mdx" // Include MDX files for documentation
  ],
  
  addons: [
    "@storybook/addon-links", 
    "@storybook/addon-essentials",
    "@storybook/addon-interactions", 
    "@storybook/addon-a11y", 
    '@storybook/addon-mdx-gfm', 
    '@chromatic-com/storybook'
  ],

  framework: {
    name: "@storybook/react-vite",
    options: {}
  },

  viteFinal: async (config, { configType }) => {
    try {
      // Load environment variables
      const env = loadEnv(configType === 'PRODUCTION' ? 'production' : 'development', process.cwd());
      
      // Get the project root directory
      const projectRoot = '/Users/riccardomarini/Dropbox/Lavori/RedCross/DesignSystem';

      // Merge custom Vite configuration
      return mergeConfig(config, {
        resolve: {
          alias: {
            '@': path.resolve(projectRoot, 'designsystemet-demo/src'),
            'design-tokens-build': path.resolve(projectRoot, 'design-tokens-build'),
          },
        },
        server: {
          fs: {
            allow: [
              projectRoot, // Allow entire project directory
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
