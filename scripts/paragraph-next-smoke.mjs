/* global document */
import { expect } from '@playwright/test';

export async function verifyNextParagraph(page, origin) {
  await page.goto(`${origin}/paragraph/`);
  await page.evaluate(() => document.fonts.ready);
  for (const size of ['xs', 'sm', 'md', 'lg', 'xl']) {
    for (const variant of ['default', 'short', 'long']) {
      for (const [weight, value] of Object.entries({ regular: '400', medium: '500', bold: '700' })) {
        for (const italic of [false, true]) {
          const paragraph = page.getByText(`${size}-${variant}-${weight}-${italic}`, { exact: true });
          await expect(paragraph).toHaveCSS('font-weight', value);
          await expect(paragraph).toHaveCSS('font-style', italic ? 'italic' : 'normal');
          await expect(paragraph).toHaveCSS('font-family', /Source Sans 3/);
        }
      }
    }
  }
  await page.route('**/*.css*', route => route.fulfill({ contentType: 'text/css', body: '' }));
  try {
    await page.reload();
    await expect(page.locator('main p')).toHaveCount(90);
    await expect(page.getByText('xl-long-bold-true', { exact: true })).toBeVisible();
  } finally {
    await page.unroute('**/*.css*');
  }
}
