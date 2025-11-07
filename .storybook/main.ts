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
    '../src/**/*.chromatic.@(ts|tsx)',
  ],

  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-a11y',
    // ✅ plain addon-docs — no MDX3 providerImportSource
    '@storybook/addon-docs',
    '@chromatic-com/storybook',
  ],

  staticDirs: ['../public'],

  framework: {
    name: '@storybook/react-vite',
    options: { strictMode: true },
  },

  viteFinal: (cfg) =>
    mergeConfig(
      cfg,
      defineConfig({
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

  docs: {}, // leave empty for v10.0.4
};

export default config;