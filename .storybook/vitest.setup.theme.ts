/**
 * Theme-matrix test setup. The base suite renders every story in light mode
 * with the default scope (primary-color-red) — meaning dark mode and the
 * secondary scopes were never exercised by a single test, including the axe
 * contrast gate. This setup file is shared by the extra vitest projects in
 * vitest.config.ts: each project sets RK_TEST_COLOR_SCHEME / RK_TEST_COLOR
 * and the whole story suite re-runs under that theme.
 *
 * The attributes are (re)applied before every test because they live on
 * <html>, outside the per-story DOM that Storybook tears down between tests.
 */
import { beforeAll, beforeEach } from 'vitest';
import { setProjectAnnotations } from '@storybook/react-vite';
import * as projectAnnotations from './preview';
import * as a11yAnnotations from '@storybook/addon-a11y/preview';

const project = setProjectAnnotations([a11yAnnotations, projectAnnotations]);

beforeAll(project.beforeAll);

const scheme = import.meta.env.VITE_RK_TEST_COLOR_SCHEME;
const color = import.meta.env.VITE_RK_TEST_COLOR;

beforeEach(() => {
  if (scheme) document.documentElement.setAttribute('data-color-scheme', scheme);
  if (color) document.documentElement.setAttribute('data-color', color);
});
