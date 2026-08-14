import { defineConfig } from '@playwright/test';

/**
 * Visuell regresjon: skjermbilder av nøkkelstories sammenlignes mot
 * innsjekkede baselines (tests/visual/__screenshots__).
 *
 * Stabilitet er alt her — enhver ikke-deterministisk piksel gir falske utslag:
 *  - fast viewport og deviceScaleFactor 1
 *  - animasjoner deaktiveres og caret skjules i selve sammenligningen
 *  - reducedMotion for komponenter som respekterer det
 *  - liten diff-toleranse (0.2 %) absorberer antialiasing-støy
 *
 * NB: Baselines genereres i CI (Linux) — skjermbilder fra macOS/Windows har
 * annen font-rendering og vil aldri matche. Bruk workflowen
 * «Update visual baselines» for å regenerere ved tilsiktede endringer.
 */
export default defineConfig({
  testDir: 'tests/visual',
  snapshotPathTemplate: '{testDir}/__screenshots__/{arg}{ext}',
  timeout: 60_000,
  retries: 0,
  use: {
    viewport: { width: 1280, height: 800 },
    deviceScaleFactor: 1,
    browserName: 'chromium',
    reducedMotion: 'reduce',
    baseURL: 'http://127.0.0.1:6106',
  },
  expect: {
    toHaveScreenshot: {
      animations: 'disabled',
      caret: 'hide',
      maxDiffPixelRatio: 0.002,
    },
  },
  webServer: {
    command: 'node scripts/serve-static.mjs storybook-build 6106',
    url: 'http://127.0.0.1:6106/iframe.html',
    reuseExistingServer: !process.env.CI,
    timeout: 30_000,
  },
});
