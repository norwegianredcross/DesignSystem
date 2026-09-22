import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { defineConfig } from 'vitest/config';

import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';

const dirname =
  typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

// Builds one browser-mode story-suite project. The theme-matrix projects
// (dark mode, secondary scope) re-run the SAME stories with attributes set on
// <html> — see .storybook/vitest.setup.theme.ts. Without them, the entire
// suite (including the axe contrast gate) only ever saw light-mode
// primary-color-red.
function storybookProject(name: string, env?: Record<string, string>) {
  return {
    extends: './.storybook/vite.config.ts',
    plugins: [storybookTest({ configDir: path.join(dirname, '.storybook') })],
    test: {
      name,
      env,
      browser: {
        enabled: true,
        headless: true,
        provider: 'playwright' as const,
        instances: [{ browser: 'chromium' as const }],
        connectTimeout: 120000,
        api: {
          host: '127.0.0.1',
        },
      },
      testTimeout: 30000,
      fileParallelism: false,
      setupFiles: [name === 'storybook' ? '.storybook/vitest.setup.ts' : '.storybook/vitest.setup.theme.ts'],
    },
  };
}

// More info at: https://storybook.js.org/docs/writing-tests/integrations/vitest-addon
export default defineConfig({
  test: {
    projects: [
      {
        test: {
          name: 'unit',
          include: ['src/**/*.test.ts', 'tests/tooling/**/*.test.ts'],
          environment: 'node',
          // build-isolation.test.ts resolves the library Vite config, and that
          // instantiates vite-plugin-dts — which reads tsconfig.dts.json and
          // stands up a TypeScript program. That alone is ~2.9 s of vitest's
          // 5 s default, so the case passed on an idle machine and timed out
          // on a loaded one. Same budget the browser projects already use.
          testTimeout: 30000,
        },
      },
      storybookProject('storybook'),
      storybookProject('storybook-dark', { VITE_RK_TEST_COLOR_SCHEME: 'dark' }),
      storybookProject('storybook-rust', { VITE_RK_TEST_COLOR: 'secondary-color-rust' }),
    ],
  },
});
