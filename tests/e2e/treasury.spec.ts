import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { site } from '../../config/site.mjs';
import { withBase } from '../../src/utils/paths';

const route = '/work/treasury/';

test.describe('Treasury case study', () => {
  test.skip(site.testContent, 'Treasury belongs to the production collection.');

  for (const entry of ['/', '/work/']) {
    test('is discoverable from ' + entry, async ({ page }) => {
      await page.goto(withBase(entry, site.base));
      const project = page.locator('.project-card').filter({
        has: page.getByRole('heading', { name: 'Treasury', exact: true }),
      });
      await expect(project).toHaveCount(1);
      const image = project.getByRole('img');
      await image.scrollIntoViewIfNeeded();
      await expect(image).toBeVisible();
      await expect(image).toHaveJSProperty('complete', true);
      expect(
        await image.evaluate(
          (element: HTMLImageElement) => element.naturalWidth > 0,
        ),
      ).toBe(true);
      const link = project.getByRole('link', { name: /View case study/ });
      await expect(link).toHaveAttribute('href', withBase(route, site.base));
      await link.click();
      await expect(page.getByRole('heading', { level: 1 })).toHaveText(
        'Treasury',
      );
    });
  }

  test('presents the private product with accessible, bounded claims', async ({
    page,
  }) => {
    const errors: string[] = [];
    page.on('pageerror', (error) => errors.push(error.message));
    page.on('requestfailed', (request) => errors.push(request.url()));
    page.on('response', (response) => {
      if (response.status() >= 400) errors.push(response.url());
    });

    const response = await page.goto(withBase(route, site.base));
    expect(response?.status()).toBe(200);
    await page.evaluate(() => document.fonts.ready);

    await expect(page.getByRole('heading', { level: 1 })).toHaveText(
      'Treasury',
    );
    await expect(
      page.getByText('Private source', { exact: true }),
    ).toBeVisible();
    await expect(page.getByRole('link', { name: 'Source code' })).toHaveCount(
      0,
    );
    await expect(page.locator('.project-media img')).toHaveJSProperty(
      'complete',
      true,
    );
    expect(
      await page
        .locator('.project-media img')
        .evaluate((element: HTMLImageElement) => element.naturalWidth > 0),
    ).toBe(true);
    await expect(page.locator('.project-media figcaption')).toContainText(
      '19 September 2026',
    );

    const article = page.locator('article.prose');
    await expect(
      page.getByRole('heading', {
        name: 'Three boundaries that define the product',
      }),
    ).toBeVisible();
    await expect(
      page.getByRole('heading', {
        name: 'Deterministic what-if, probabilistic interpretation',
      }),
    ).toBeVisible();
    expect(await article.innerText()).toContain('111 Playwright tests passed');
    expect(await article.innerText()).toContain(
      'do not place trades or persist them',
    );
    expect(await article.innerText()).toContain('nine MCP tools');
    expect(await article.innerText()).not.toContain('100% test coverage');

    await expect(page.locator('.case-study-flow')).toHaveCount(2);
    await expect(page.locator('.technical-detail')).toHaveCount(3);
    await expect(page.locator('.technical-detail[open]')).toHaveCount(0);
    await expect(page.locator('astro-island')).toHaveCount(0);
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);

    const scan = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
      .analyze();
    expect(scan.violations).toEqual([]);
    expect(errors).toEqual([]);
  });

  test('technical detail is keyboard-accessible and reflows', async ({
    page,
  }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto(withBase(route, site.base));

    const panels = page.locator('.technical-detail');
    for (const panel of await panels.all()) {
      const summary = panel.locator('summary');
      await summary.focus();
      await expect(summary).toBeFocused();
      await page.keyboard.press('Enter');
      await expect(panel).toHaveAttribute('open', '');
      await expect(panel.locator('.detail-body')).toBeVisible();
    }

    for (const width of [320, 768, 1440]) {
      await page.setViewportSize({ width, height: 900 });
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth,
        ),
      ).toBe(true);
    }

    await page.setViewportSize({ width: 390, height: 844 });
    await page.evaluate(() => {
      document.documentElement.style.fontSize = '200%';
    });
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);

    const scan = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
      .analyze();
    expect(scan.violations).toEqual([]);
  });

  test('remains readable without JavaScript', async ({ browser }) => {
    const context = await browser.newContext({
      javaScriptEnabled: false,
      viewport: { width: 390, height: 844 },
    });
    try {
      const page = await context.newPage();
      await page.goto('http://127.0.0.1:4321' + withBase(route, site.base));
      await expect(page.locator('.case-study-flow')).toHaveCount(2);
      const detail = page.locator('#treasury-correctness-detail');
      await detail.locator('summary').click();
      await expect(detail).toHaveAttribute('open', '');
      await expect(detail.locator('.detail-body')).toBeVisible();
    } finally {
      await context.close();
    }
  });
});
