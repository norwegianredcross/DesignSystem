import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist', 'dist-app', 'storybook-build', 'storybook-static'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      // Part of eslint:recommended from ESLint 10; enabled ahead of that
      // upgrade so the codebase is already clean when it lands.
      'no-useless-assignment': 'error',
      // Warnings fail CI (lint runs with --max-warnings=0), so every rule
      // here is effectively an error; keep the level as a signal of intent.
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
  {
    // The library's entry files legitimately export hooks next to their
    // components (useRadioGroup beside Radio, useLanguage beside the
    // provider) - that IS the public API. Fast Refresh is a dev-server
    // concern for the docs app under src/pages, which keeps the rule.
    files: ['src/components/**/*.{ts,tsx}', 'src/context/**/*.{ts,tsx}'],
    rules: {
      'react-refresh/only-export-components': 'off',
    },
  },
  {
    files: ['**/*.stories.{ts,tsx}', '.storybook/**/*.{ts,tsx}'],
    rules: {
      'react-hooks/rules-of-hooks': 'off',
    },
  },
)
