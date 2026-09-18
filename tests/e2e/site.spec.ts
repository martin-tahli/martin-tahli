import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { profile } from '../../src/data/profile';
import { site } from '../../config/site.mjs';
import { withBase } from '../../src/utils/paths';
const routes = ['/', '/work/', '/notes/', '/about/', '/cv/', '/contact/'];

for (const route of routes) {
  test(`${route} has semantics, metadata, working local assets, and no axe violations`, async ({
    page,
  }) => {
    const errors: string[] = [];
    page.on('pageerror', (error) => errors.push(error.message));
    page.on('requestfailed', (request) =>
      errors.push(`Failed request: ${request.url()}`),
    );
    page.on('response', (response) => {
      if (response.status() >= 400)
        errors.push(`HTTP ${response.status()}: ${response.url()}`);
    });
    const response = await page.goto(withBase(route, site.base));
    expect(response?.status()).toBe(200);
    await page.evaluate(() => document.fonts.ready);
    await expect(page.getByRole('main')).toHaveCount(1);
    await expect(page.getByRole('heading', { level: 1 })).toHaveCount(1);
    await expect(page.locator('meta[name="description"]')).not.toHaveAttribute(
      'content',
      '',
    );
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      'href',
      `${site.origin}${withBase(route, site.base)}`,
    );
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
}

test('navigation and footer point to real local pages', async ({
  page,
  request,
}) => {
  await page.goto(withBase('/', site.base));
  const links = await page
    .locator('header nav a, footer nav a')
    .evaluateAll((elements) =>
      elements.map((element) => element.getAttribute('href') ?? ''),
    );
  for (const href of new Set(links)) {
    expect(href.startsWith(site.base)).toBe(true);
    expect((await request.get(href)).status()).toBe(200);
  }
});

test('keyboard skip link reaches main content', async ({ page }) => {
  await page.goto(withBase('/', site.base));
  await page.keyboard.press('Tab');
  await expect(
    page.getByRole('link', { name: 'Skip to content' }),
  ).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(page.getByRole('main')).toBeFocused();
});

test('mobile navigation supports keyboard dismissal', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(withBase('/', site.base));
  const summary = page.locator('#site-menu summary');
  await summary.click();
  await expect(page.locator('#site-menu')).toHaveAttribute('open', '');
  await page.keyboard.press('Escape');
  await expect(page.locator('#site-menu')).not.toHaveAttribute('open');
  await expect(summary).toBeFocused();
});

test('core navigation remains usable without JavaScript', async ({
  browser,
}) => {
  const context = await browser.newContext({
    javaScriptEnabled: false,
    viewport: { width: 390, height: 844 },
  });
  const page = await context.newPage();
  await page.goto(`http://127.0.0.1:4321${withBase('/', site.base)}`);
  await page.locator('#site-menu summary').click();
  await page
    .getByRole('navigation', { name: 'Mobile navigation' })
    .getByRole('link', { name: 'Work', exact: true })
    .click();
  await expect(page).toHaveURL(new RegExp(`${site.base}work/$`));
  await context.close();
});

test('320px reflow and reduced-motion styles remain usable', async ({
  page,
}) => {
  await page.setViewportSize({ width: 320, height: 700 });
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto(withBase('/', site.base));
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBe(true);
  const button = page.getByRole('link', { name: 'View Work', exact: true });
  await expect(button).toBeVisible();
  expect(
    await button.evaluate(
      (element) => getComputedStyle(element).transitionDuration,
    ),
  ).toBe('0s');
});

test('CV download and indexing follow verified content', async ({ page }) => {
  await page.goto(withBase('/cv/', site.base));
  await expect(page.locator('a[download]')).toHaveCount(profile.cvPdf ? 1 : 0);
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
    'content',
    !site.indexable || profile.experience.length === 0
      ? 'noindex, nofollow'
      : 'index, follow',
  );
});

test('drafts are absent from public pages and the sitemap', async ({
  request,
}) => {
  const urls = [...routes, '/sitemap-index.xml', '/sitemap-0.xml'];
  for (const url of urls) {
    const response = await request.get(withBase(url, site.base));
    expect(await response.text()).not.toContain('DO_NOT_PUBLISH_FIXTURE');
    expect(await response.text()).not.toContain('draft-fixture');
  }
  const response = await request.get(
    withBase('/work/draft-fixture/', site.base),
  );
  expect(response.status()).toBe(404);
});

test('capture homepage for human visual review, without approving a baseline', async ({
  page,
}, testInfo) => {
  await page.goto(withBase('/', site.base));
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({
    path: testInfo.outputPath('home-review.png'),
    fullPage: true,
  });
});

test('fixture build renders real MDX templates, hides drafts, and links only published related work', async ({
  page,
  request,
}) => {
  test.skip(
    !site.testContent,
    'Runs only against the isolated test-dist build.',
  );
  await page.goto(withBase('/work/public-fixture/', site.base));
  await expect(page.getByRole('heading', { level: 1 })).toHaveText(
    'Test fixture — public case study',
  );
  await expect(
    page.getByRole('heading', { name: 'Architecture', exact: true }),
  ).toBeVisible();
  await expect(
    page.getByRole('complementary', { name: 'Decision' }),
  ).toBeVisible();
  expect(
    (await request.get(withBase('/work/draft-fixture/', site.base))).status(),
  ).toBe(404);
  expect(
    (await request.get(withBase('/notes/future-fixture/', site.base))).status(),
  ).toBe(404);
  await page.goto(withBase('/work/private-fixture/', site.base));
  await expect(page.getByText('Private source', { exact: true })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Source code' })).toHaveCount(0);
  await page.goto(withBase('/notes/public-note-fixture/', site.base));
  await expect(
    page.getByRole('heading', { name: 'Related work' }),
  ).toBeVisible();
  await expect(
    page.getByRole('link', { name: 'Test fixture — public case study →' }),
  ).toBeVisible();
  await expect(page.locator('article a[href*="draft-fixture"]')).toHaveCount(0);
});
