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

const scheme = import.meta.env.VITE_RK_TEST_COLOR_SCHEME;
const color = import.meta.env.VITE_RK_TEST_COLOR;

/**
 * The theme has to be set as Storybook GLOBALS, not just as attributes on
 * <html>. preview.ts declares initialGlobals {mode: 'light', brand:
 * 'primary-color-red'} and themeDecorator writes those onto the root in a
 * useEffect during render — after this file's beforeEach. Setting only the
 * attributes meant the decorator overwrote them on every story, so all three
 * projects rendered light/primary-color-red and the dark and secondary-scope
 * runs were silently duplicating the base suite, axe contrast gate included.
 */
const themeOverrides =
  scheme || color
    ? { initialGlobals: { ...(scheme ? { mode: scheme } : {}), ...(color ? { brand: color } : {}) } }
    : {};

const project = setProjectAnnotations([a11yAnnotations, projectAnnotations, themeOverrides]);

beforeAll(project.beforeAll);

// Belt and braces: the attributes live on <html>, outside the per-story DOM
// Storybook tears down between tests, and this covers the first paint before
// the decorator's effect runs. The decorator now agrees with these values
// rather than fighting them.
beforeEach(() => {
  if (scheme) document.documentElement.setAttribute('data-color-scheme', scheme);
  if (color) document.documentElement.setAttribute('data-color', color);
});
