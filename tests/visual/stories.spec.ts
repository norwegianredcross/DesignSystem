import { test, expect } from '@playwright/test';

/**
 * Visuell regresjon for nøkkelstories. Utvalget dekker de mest synlige
 * flatene (Header/Footer/Donor), skjemakomponenter og tokens-tunge
 * komponenter — det er disse en token-bump eller Digdir-oppgradering
 * typisk endrer.
 *
 * Merk: Footer-baselinen inneholder årstallet i copyright-linjen og må
 * regenereres ved årsskiftet (én kjøring av «Update visual baselines»).
 */
const STORIES = [
  'components-button--primary',
  'components-alert--info',
  'components-header--default',
  'components-footer--default',
  'components-donor--default',
  'components-card--default',
  'components-tag--colors',
  'components-datepicker--calendar-with-selected-date',
  'components-select--default',
  'components-table--zebra-striped',
  'components-tabs--default',
  'components-badge--with-count',
  'components-graphicelement--all-shapes-and-variants',
  'components-switch--grouped',
  'components-textfield--default',
];

for (const id of STORIES) {
  test(`story ${id}`, async ({ page }) => {
    // iframe.html renders ONE story without Storybook's manager UI — the
    // same surface the docs and consumers see, nothing else.
    await page.goto(`/iframe.html?id=${id}&viewMode=story`);
    await page.waitForSelector('#storybook-root > *');
    // A vertical scrollbar appears or not depending on content height, which
    // changes the viewport width and shifts centered layouts a few pixels
    // between runs. Forcing the scrollbar makes the width deterministic.
    await page.addStyleTag({ content: 'html { overflow-y: scroll !important; }' });
    // Fonts load from Google Fonts; screenshotting before they're in use
    // diffs on the fallback font's metrics. document.fonts.ready is NOT
    // enough — it resolves as soon as no loads are pending, which can be
    // before the CSS has even requested the font. Request every used weight
    // explicitly and wait until the face is actually available.
    await page.evaluate(() =>
      Promise.all(
        ['400', '500', '600', '700'].map((w) => document.fonts.load(`${w} 16px "Source Sans 3"`)),
      ),
    );
    await page.waitForFunction(() => document.fonts.check('400 16px "Source Sans 3"'));
    // Element screenshot (not full page): crops to the story's own box, so
    // page-level layout noise around it can't produce false diffs.
    await expect(page.locator('#storybook-root')).toHaveScreenshot(`${id}.png`);
  });
}
