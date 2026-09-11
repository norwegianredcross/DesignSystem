import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig, mergeConfig } from 'vite';
import type { StorybookConfig } from '@storybook/react-vite';
import type { PropItem } from 'react-docgen-typescript';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config: StorybookConfig = {
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.stories.@(ts|tsx)',
  ],

  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
    '@storybook/addon-vitest',
  ],

  staticDirs: ['../public'],

  framework: {
    name: '@storybook/react-vite',
    options: {
      strictMode: true,
      builder: {
        viteConfigPath: path.resolve(__dirname, 'vite.config.ts'),
      },
    },
  },

  viteFinal: (cfg, { configType }) =>
    mergeConfig(
      cfg,
      defineConfig({
        // Only set the base path for production builds (GitHub Pages deployment).
        // In dev/test mode, the base must stay '/' for vitest browser to work.
        ...(configType === 'PRODUCTION' ? { base: '/DesignSystem/storybook/' } : {}),
        resolve: {
          alias: {
            '@story-utils': path.resolve(__dirname, '../src/story-utils'),
            '@assets': path.resolve(__dirname, '../assets'),
          },
        },
      }),
    ),

  typescript: {
    check: true,
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      shouldRemoveUndefinedFromOptional: true,
      propFilter: (prop: PropItem) => {
        const keep =
          prop.parent ? !/node_modules/.test(prop.parent.fileName) : true;
        return keep && prop.name !== 'popovertarget';
      },
    },
  },

  docs: {},
};

export default config;
