// .storybook/main.ts

import type { StorybookConfig } from '@storybook/react-vite';
import type { InlineConfig } from 'vite';

// Define the expected shape of the options object passed to viteFinal,
// specifically the configType property.
interface ViteFinalOptions {
  configType?: 'DEVELOPMENT' | 'PRODUCTION';
}

const config: StorybookConfig = {
  // ====================================================================
  // == SECTION 1: YOUR PROJECT'S STORYBOOK CONFIGURATION ==
  // == YOU MUST UPDATE THESE TO MATCH YOUR PROJECT STRUCTURE AND NEEDS ==
  // ====================================================================
  stories: [
    '../src/components/**/*.stories.@(js|jsx|mjs|ts|tsx)', // Example: if your stories are in src
    '../src/components/**/*.mdx', // Example
  ],
  addons: [
    '@storybook/addon-onboarding', // From your package.json
    '@storybook/addon-essentials', // Includes many common addons
    '@storybook/addon-links',      // For linking between stories
    '@storybook/addon-interactions', // For play functions
    // Add other addons you use from your package.json devDependencies, for example:
    // '@chromatic-com/storybook',
    // '@storybook/experimental-addon-test',
  ],

  // ====================================================================
  // == SECTION 2: FRAMEWORK CONFIGURATION ==
  // ====================================================================
  framework: {
    name: '@storybook/react-vite', // This matches your package.json
    options: {},
  },

  // ====================================================================
  // == SECTION 3: DOCS CONFIGURATION (Optional but common) ==
  // ====================================================================
 
  // ====================================================================
  // == SECTION 4: STATIC ASSETS (Optional) ==
  // ====================================================================
  // staticDirs: ['../public'], // Example: if you have static assets for Storybook

  // ====================================================================
  // == SECTION 5: VITE CONFIGURATION OVERRIDE FOR PRODUCTION BASE PATH ==
  // ====================================================================
  async viteFinal(
    viteInlineConfig: InlineConfig, // Renamed for clarity
    options: ViteFinalOptions // Use the interface defined above
  ): Promise<InlineConfig> {
    if (options.configType === 'PRODUCTION') {
      // This is the public path where Storybook will live on GitHub Pages
      const publicDeployPath = '/DesignSystem/storybook/'; // Corrected deployment path
      console.log(
        `Applying PRODUCTION base path for Storybook Vite build: ${publicDeployPath}`
      );
      if (viteInlineConfig) { // Ensure viteInlineConfig object exists
        viteInlineConfig.base = publicDeployPath;
      }
    }
    // Return the modified Vite configuration.
    return viteInlineConfig;
  },
};

export default config;
