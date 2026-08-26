import fs from 'node:fs';
import { describe, expect, it } from 'vitest';

/**
 * Driftvakt for prose-stilene: .rk-prose a speiler Digdirs .ds-link, og
 * dette er testen som håndhever det. Ved en Digdir-bump som endrer
 * lenkedeklarasjonene blir denne rød i CI i stedet for at prose driver
 * stille fra komponenten — hele innvendingen mot å duplisere
 * deklarasjonene i biblioteket.
 */
const digdirCss = fs.readFileSync('node_modules/@digdir/designsystemet-css/dist/src/link.css', 'utf8');
const proseCss = fs.readFileSync('src/styles/prose.css', 'utf8');

/** Trekker ut --dsc-*-deklarasjonene fra første blokk som matcher selektoren. */
function customProps(css: string, selector: string): Record<string, string> {
  const start = css.indexOf(selector);
  expect(start, `fant ikke ${selector}`).toBeGreaterThanOrEqual(0);
  const block = css.slice(css.indexOf('{', start) + 1, css.indexOf('}', start));
  const props: Record<string, string> = {};
  for (const m of block.matchAll(/(--dsc-[\w-]+)\s*:\s*([^;]+)/g)) {
    props[m[1]] = m[2].trim();
  }
  return props;
}

describe('rk-prose', () => {
  it('speiler Digdirs .ds-link-variabler eksakt', () => {
    const digdir = customProps(digdirCss, '.ds-link');
    const prose = customProps(proseCss, '.rk-prose a');
    // Prose trenger ikke alle (border-radius-varianten gjelder komponent-
    // spesifikke tilstander), men alt prose DEFINERER må matche Digdir.
    for (const [prop, value] of Object.entries(prose)) {
      expect(digdir[prop], `${prop} finnes ikke lenger i Digdirs .ds-link`).toBeDefined();
      expect(value, `${prop} har driftet fra Digdirs verdi`).toBe(digdir[prop]);
    }
    expect(Object.keys(prose).length).toBeGreaterThanOrEqual(6);
  });
});
