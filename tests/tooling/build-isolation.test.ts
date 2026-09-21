import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';
import { resolveConfig } from 'vite';
import storybookConfig from '../../.storybook/main';
import testConfig from '../../vitest.config';

const root = fileURLToPath(new URL('../../', import.meta.url));
const workbenchConfig = fileURLToPath(new URL('../../.storybook/vite.config.ts', import.meta.url));
const libraryConfig = fileURLToPath(new URL('../../vite.config.ts', import.meta.url));

describe('library and component workbench build isolation', () => {
  it('points Storybook and all three browser suites at the workbench config', () => {
    expect(storybookConfig.framework).toMatchObject({
      options: { builder: { viteConfigPath: workbenchConfig } },
    });
    expect(testConfig).toMatchObject({
      test: {
        projects: expect.arrayContaining(
          ['storybook', 'storybook-dark', 'storybook-rust'].map((name) =>
            expect.objectContaining({
              extends: './.storybook/vite.config.ts',
              test: expect.objectContaining({ name }),
            }),
          ),
        ),
      },
    });
  });

  it.each(['serve', 'build'] as const)(
    'keeps package generation out of the workbench during %s',
    async (command) => {
      const config = await resolveConfig({ root, configFile: workbenchConfig, logLevel: 'silent' }, command);

      expect(config.plugins.map((plugin) => plugin.name)).toContain('vite:react-babel');
      expect(config.plugins.map((plugin) => plugin.name)).not.toContain('vite:dts');
      expect(config.build.lib).toBe(false);
      expect(config.build.rollupOptions.external).toBeUndefined();
    },
  );

  it('retains declaration generation and library output in the package build', async () => {
    const config = await resolveConfig({ root, configFile: libraryConfig, logLevel: 'silent' }, 'build');

    expect(config.plugins.map((plugin) => plugin.name)).toContain('vite:dts');
    expect(config.build.lib).toMatchObject({
      entry: fileURLToPath(new URL('../../src/index.ts', import.meta.url)),
      formats: ['es'],
    });
    expect(config.build.rollupOptions.output).toMatchObject({
      preserveModules: true,
      banner: "'use client';",
    });
  });
});
