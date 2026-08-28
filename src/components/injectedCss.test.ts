import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';

/**
 * Seven components ship their CSS twice: a styles.module.css that ends up in
 * dist/rk-designsystem.css, and a build*InlineCss(styles) template literal that
 * a useEffect injects into <head> on mount.
 *
 * The injected copy exists so that a consumer who never imports
 * 'rk-designsystem/styles' still gets styled components, and must not be
 * removed. But it is a FALLBACK, and a fallback has to lose to the real
 * stylesheet wherever that is present.
 *
 * Appending it put it last in <head>, so at equal specificity it beat the
 * bundled sheet for every consumer — including the ones who did import the CSS.
 * Because the injected copies carry no @media rules, their desktop base values
 * silently replaced the bundled responsive overrides: measured in a real Next
 * consumer at 400px, Footer's logo rendered 169px against the sheet's 130px,
 * its padding 60/32 against 40/16, and Donor's card became a fixed 344px where
 * the sheet says max-width: 100%.
 *
 * document.head.prepend puts the fallback first, so anything the bundled sheet
 * declares wins and anything it does not declare still falls back. This test
 * pins that for every component, so a new one cannot quietly reintroduce the
 * override.
 */

const componentsDir = path.dirname(fileURLToPath(import.meta.url));

const injectors = fs
  .readdirSync(componentsDir)
  .map((name) => ({ name, file: path.join(componentsDir, name, 'index.tsx') }))
  .filter(({ file }) => fs.existsSync(file))
  .map(({ name, file }) => ({ name, source: fs.readFileSync(file, 'utf8') }))
  .filter(({ source }) => /document\.head\.(append|prepend|insertBefore)/.test(source));

describe('runtime-injected CSS fallbacks', () => {
  it('finds the components that inject a stylesheet', () => {
    // Guards the discovery itself: if this drops to zero the assertions below
    // would vacuously pass.
    expect(injectors.map((i) => i.name).sort()).toEqual([
      'Carousel',
      'DateInput',
      'DatePicker',
      'Donor',
      'Footer',
      'GraphicElement',
      'Header',
    ]);
  });

  for (const { name, source } of injectors) {
    it(`${name} prepends its fallback so the bundled stylesheet wins`, () => {
      expect(
        source.includes('document.head.prepend('),
        `${name} must inject with document.head.prepend`,
      ).toBe(true);
      expect(
        /document\.head\.appendChild\(/.test(source),
        `${name} appends its fallback to <head>, which puts it AFTER the bundled ` +
          'stylesheet and lets it override the real styles. Use document.head.prepend.',
      ).toBe(false);
    });
  }
});
