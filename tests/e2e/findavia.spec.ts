import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { site } from '../../config/site.mjs';
import { withBase } from '../../src/utils/paths';

const route = '/work/findavia/';

// Production content must not leak into the isolated synthetic-content build.
test.describe('Findavia case study', () => {
  test.skip(site.testContent, 'Findavia belongs to the production collection.');

  for (const entry of ['/', '/work/']) {
    test(`is discoverable from ${entry}`, async ({ page }) => {
      await page.goto(withBase(entry, site.base));
      const project = page.locator('.project-card').filter({
        has: page.getByRole('heading', { name: 'Findavia', exact: true }),
      });
      await expect(project).toHaveCount(1);
      const link = project.getByRole('link', { name: /View case study/ });
      await expect(link).toHaveAttribute('href', withBase(route, site.base));
      await link.click();
      await expect(page.getByRole('heading', { level: 1 })).toHaveText(
        'Findavia',
      );
    });
  }

  test('renders accessible content, metadata, and explicit evidence limits', async ({
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
    await expect(page.getByRole('main')).toHaveCount(1);
    await expect(page.getByRole('heading', { level: 1 })).toHaveText(
      'Findavia',
    );
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      'href',
      `${site.origin}${withBase(route, site.base)}`,
    );
    await expect(page.locator('meta[name="description"]')).toHaveAttribute(
      'content',
      /Findavia/,
    );
    await expect(
      page.getByText('Private source', { exact: true }),
    ).toBeVisible();
    await expect(page.getByRole('link', { name: 'Source code' })).toHaveCount(0);
    await expect(page.locator('.case-study-flow')).toHaveCount(2);
    await expect(page.locator('.case-study-flow li')).toHaveCount(6);
    await expect(page.locator('astro-island')).toHaveCount(0);

    const body = await page.locator('article.prose').innerText();
    expect(body).toContain('Billing remains deferred');
    expect(body).toContain('Inventory is not coverage');
    expect(body).not.toMatch(/1,123|212 shipped keys|64 Playwright/);
    expect(body).not.toMatch(
      /Recruiter Signal Audit|Questions \/ Missing Evidence/,
    );
    expect(body).not.toContain('DO_NOT_PUBLISH_FIXTURE');
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

  test('section navigation targets real headings and works with the keyboard', async ({
    page,
  }) => {
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
    expect(targets.length).toBeGreaterThan(5);
    expect(targets.every((tag) => tag === 'H2')).toBe(true);
    const architecture = toc.getByRole('link', {
      name: 'Architecture',
      exact: true,
    });
    await architecture.focus();
    await expect(architecture).toBeFocused();
    await page.keyboard.press('Enter');
    expect(new URL(page.url()).hash).toBe('#architecture');
  });

  test('reflows at narrow, tablet, and enlarged-text sizes without motion', async ({
    page,
  }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto(withBase(route, site.base));
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
    await expect(page.locator('.case-study-flow').first()).toBeVisible();
    const motion = await page.locator('.case-study-flow').first().evaluate(
      (element) => ({
        animation: getComputedStyle(element).animationName,
        transition: getComputedStyle(element).transitionDuration,
      }),
    );
    expect(motion).toEqual({ animation: 'none', transition: '0s' });
  });

  test('content and return navigation work without JavaScript', async ({
    browser,
  }) => {
    const context = await browser.newContext({
      javaScriptEnabled: false,
      viewport: { width: 390, height: 844 },
    });
    try {
      const page = await context.newPage();
      await page.goto(`http://127.0.0.1:4321${withBase(route, site.base)}`);
      await expect(page.locator('.case-study-flow')).toHaveCount(2);
      await expect(
        page.getByRole('heading', { name: 'AI-assisted engineering' }),
      ).toBeVisible();
      await page
        .getByRole('link', { name: '← Back to work', exact: true })
        .click();
      expect(new URL(page.url()).pathname).toBe(withBase('/work/', site.base));
    } finally {
      await context.close();
    }
  });

  test('captures the case study for visual review', async ({
    page,
  }, testInfo) => {
    await page.goto(withBase(route, site.base));
    await page.evaluate(() => document.fonts.ready);
    await page.screenshot({
      path: testInfo.outputPath('findavia-review.png'),
      fullPage: true,
    });
  });
});
