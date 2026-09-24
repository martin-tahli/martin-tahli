import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { site } from '../../config/site.mjs';
import { withBase } from '../../src/utils/paths';

const route = '/work/portfolio-engineering/';
const title = 'Portfolio publishing system';

// These are real project entries, not template fixtures.
test.describe('Portfolio engineering case study', () => {
  test.skip(site.testContent, 'This case belongs to production content.');

  test('supports Work without displacing Findavia', async ({ page }) => {
    await page.goto(withBase('/', site.base));
    const home = page.locator('.project-card');
    await expect(home.getByRole('heading', { name: title })).toHaveCount(0);
    await expect(home.getByRole('heading', { name: 'Findavia' })).toBeVisible();

    await page.goto(withBase('/work/', site.base));
    const cards = page.locator('.project-card');
    await expect(cards.first()).toContainText('Findavia');
    const project = cards.filter({
      has: page.getByRole('heading', { name: title, exact: true }),
    });
    await expect(project).toHaveCount(1);
    const link = project.getByRole('link', { name: /View case study/ });
    await expect(link).toHaveAttribute('href', withBase(route, site.base));
    await link.click();
    await expect(page.getByRole('heading', { level: 1 })).toHaveText(title);
  });

  test('has honest metadata and accessible content', async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', (error) => errors.push(error.message));
    page.on('requestfailed', (request) => errors.push(request.url()));
    page.on('response', (response) => {
      if (response.status() >= 400) errors.push(response.url());
    });
    const response = await page.goto(withBase(route, site.base));
    expect(response?.status()).toBe(200);
    await page.evaluate(() => document.fonts.ready);
    await expect(page.getByRole('main')).toHaveCount(1);
    await expect(page.getByRole('heading', { level: 1 })).toHaveText(title);
    const canonical = page.locator('link[rel="canonical"]');
    const url = `${site.origin}${withBase(route, site.base)}`;
    await expect(canonical).toHaveAttribute('href', url);
    const description = page.locator('meta[name="description"]');
    await expect(description).toHaveAttribute('content', /Engineering/);
    const robots = page.locator('meta[name="robots"]');
    await expect(robots).toHaveAttribute('content', /noindex/);
    const source = page.getByRole('link', { name: 'Source code' });
    await expect(source).toHaveAttribute(
      'href',
      'https://github.com/martin-tahli/martin-tahli',
    );
    const publicSource = page.getByText('Public source', { exact: true });
    await expect(publicSource).toBeVisible();
    await expect(page.locator('.project-media')).toHaveCount(0);
    await expect(page.locator('astro-island')).toHaveCount(0);
    await expect(page.locator('.case-study-flow')).toHaveCount(1);
    await expect(page.locator('.case-study-flow li')).toHaveCount(3);
    await expect(page.locator('article.prose > h2')).toHaveCount(6);
    await expect(page.locator('.technical-detail')).toHaveCount(3);
    await expect(page.locator('.technical-detail[open]')).toHaveCount(0);
    const article = page.locator('article.prose');
    const visible = await article.innerText();
    expect(visible).toContain('deployed, non-indexed preview');
    expect(visible).toContain('Factual approval remains human');
    expect(visible).toContain('No hiring, traffic, conversion, performance');
    const body = await article.textContent();
    expect(body).not.toMatch(/82 current unit tests|seven routes/);
    expect(body).not.toMatch(/Recruiter Signal Audit|Internal Evidence Ledger/);
    expect(body).not.toContain('DO_NOT_PUBLISH_FIXTURE');
    const findavia = article.getByRole('link', {
      name: 'Findavia',
      exact: true,
    });
    await expect(findavia).toHaveAttribute(
      'href',
      withBase('/work/findavia/', site.base),
    );
    const scan = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
      .analyze();
    expect(scan.violations).toEqual([]);
    expect(errors).toEqual([]);
  });

  test('has working keyboard section navigation', async ({ page }) => {
    await page.goto(withBase(route, site.base));
    const toc = page.getByRole('navigation', { name: 'Table of contents' });
    if (!(await toc.isVisible())) {
      await page.getByText('On this page', { exact: true }).click();
    }
    const targets = await toc.locator('a').evaluateAll((links) =>
      links.map((link) => {
        const id = link.getAttribute('href')?.slice(1) ?? '';
        return document.getElementById(id)?.tagName;
      }),
    );
    expect(targets).toHaveLength(6);
    expect(targets.every((tag) => tag === 'H2')).toBe(true);
    const architecture = toc.getByRole('link', { name: 'Architecture' });
    await architecture.focus();
    await expect(architecture).toBeFocused();
    await page.keyboard.press('Enter');
    expect(new URL(page.url()).hash).toBe('#architecture');
  });

  test('details support keyboard control and expanded accessibility', async ({
    page,
  }) => {
    await page.goto(withBase(route, site.base));
    for (const panel of await page.locator('.technical-detail').all()) {
      const summary = panel.locator('summary');
      await expect(panel).not.toHaveAttribute('open');
      await summary.focus();
      await expect(summary).toBeFocused();
      await page.keyboard.press('Enter');
      await expect(panel).toHaveAttribute('open', '');
      await expect(panel.locator('.detail-body')).toBeVisible();
      await page.keyboard.press('Space');
      await expect(panel).not.toHaveAttribute('open');
      await summary.click();
    }
    await expect(page.locator('.technical-detail[open]')).toHaveCount(3);
    const scan = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
      .analyze();
    expect(scan.violations).toEqual([]);
  });

  test('reflows with missing fonts and reduced motion', async ({ page }) => {
    await page.route(/\.woff2?(?:\?.*)?$/, (request) => request.abort());
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto(withBase(route, site.base));
    await page.evaluate(() => document.fonts.ready);
    const summaries = page.locator('.technical-detail summary');
    for (const summary of await summaries.all()) {
      await summary.click();
    }
    for (const width of [320, 768, 1440]) {
      await page.setViewportSize({ width, height: 900 });
      const fits = await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      );
      expect(fits).toBe(true);
    }
    await page.setViewportSize({ width: 390, height: 844 });
    await page.evaluate(() => {
      document.documentElement.style.fontSize = '200%';
    });
    const fits = await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    );
    expect(fits).toBe(true);
    const flow = page.locator('.case-study-flow');
    const motion = await flow.evaluate((element) => ({
      animation: getComputedStyle(element).animationName,
      transition: getComputedStyle(element).transitionDuration,
    }));
    expect(motion).toEqual({ animation: 'none', transition: '0s' });
  });

  test('works without JavaScript', async ({ browser }) => {
    const context = await browser.newContext({
      javaScriptEnabled: false,
      viewport: { width: 390, height: 844 },
    });
    try {
      const page = await context.newPage();
      await page.goto(`http://127.0.0.1:4321${withBase(route, site.base)}`);
      await expect(page.getByRole('heading', { level: 1 })).toHaveText(title);
      await expect(page.locator('.case-study-flow')).toBeVisible();
      for (const panel of await page.locator('.technical-detail').all()) {
        await panel.locator('summary').click();
        await expect(panel).toHaveAttribute('open', '');
        await expect(panel.locator('.detail-body')).toBeVisible();
      }
      const back = page.getByRole('link', {
        name: '← Back to work',
        exact: true,
      });
      await back.click();
      expect(new URL(page.url()).pathname).toBe(withBase('/work/', site.base));
    } finally {
      await context.close();
    }
  });

  test('captures the reading layout and supporting placement', async ({
    page,
  }, testInfo) => {
    await page.goto(withBase(route, site.base));
    await page.evaluate(() => document.fonts.ready);
    const story = testInfo.outputPath('portfolio-story.png');
    await page.screenshot({ path: story, fullPage: true });
    await testInfo.attach('Main story', {
      path: story,
      contentType: 'image/png',
    });
    const panel = page.locator('#portfolio-publication-detail');
    await panel.locator('summary').click();
    const detail = testInfo.outputPath('portfolio-detail.png');
    await panel.screenshot({ path: detail });
    await testInfo.attach('Expanded detail', {
      path: detail,
      contentType: 'image/png',
    });
    await page.goto(withBase('/work/', site.base));
    await page.evaluate(() => document.fonts.ready);
    const placement = testInfo.outputPath('portfolio-work.png');
    await page.screenshot({ path: placement, fullPage: true });
    await testInfo.attach('Work placement', {
      path: placement,
      contentType: 'image/png',
    });
  });
});

test('fixture mode excludes the production case', async ({ page }) => {
  test.skip(!site.testContent, 'Fixture-build contract.');
  const response = await page.goto(withBase(route, site.base));
  expect(response?.status()).toBe(404);
  await page.goto(withBase('/work/', site.base));
  await expect(page.getByRole('heading', { name: title })).toHaveCount(0);
});
