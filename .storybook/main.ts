import path from 'node:path';
import { fileURLToPath } from 'node:url';
import type { StorybookConfig } from '@storybook/react-vite';
import type { PropItem } from 'react-docgen-typescript';
import { defineConfig, mergeConfig } from 'vite';

const dirname =
  typeof __dirname !== 'undefined'
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

const config: StorybookConfig = {
  viteFinal: (config) =>
    mergeConfig(
      config,
      defineConfig({
        resolve: {
          alias: {
            '@story-utils': path.resolve(dirname, '../src/story-utils'),
            '@assets': path.resolve(dirname, '../assets'),
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
        const defaultLogicFromStory = prop.parent
          ? !/node_modules/.test(prop.parent.fileName)
          : true;
        return defaultLogicFromStory && prop.name !== 'popovertarget';
      },
    },
  },
  stories: [
    '../src/**/*.stories.@(ts|tsx)',
    '../src/**/*.chromatic.@(ts|tsx)',
  ],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
    '@storybook/addon-links',
    '@chromatic-com/storybook',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {
      strictMode: true,
    },
  },
  docs: {},
};

export default config;