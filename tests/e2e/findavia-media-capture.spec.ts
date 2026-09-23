import { test } from '@playwright/test';
import { writeFile } from 'node:fs/promises';
import { site } from '../../config/site.mjs';

// One-time, read-only media acquisition. Remove after editorial review.
// This is not a validation of authenticated Findavia workflows.
test('capture public Findavia for editorial review', async ({
  browser,
}, testInfo) => {
  test.skip(site.testContent || site.base !== '/');
  test.setTimeout(60_000);
  const mobile = testInfo.project.name.includes('mobile');
  const viewport = mobile
    ? { width: 390, height: 844 }
    : { width: 1440, height: 960 };
  const context = await browser.newContext({
    viewport,
    deviceScaleFactor: 1,
    reducedMotion: 'reduce',
  });
  const page = await context.newPage();
  const report: Record<string, unknown> = {
    url: 'https://findavia.com/',
    capturedAt: new Date().toISOString(),
    viewport,
    scope: 'Public anonymous page only; no account or booking writes.',
  };
  await page.route('**/*', (request) => {
    const method = request.request().method();
    return ['GET', 'HEAD', 'OPTIONS'].includes(method)
      ? request.continue()
      : request.abort();
  });
  try {
    const response = await page.goto('https://findavia.com/', {
      waitUntil: 'domcontentloaded',
      timeout: 25_000,
    });
    report.status = response?.status();
    await page.waitForTimeout(12_000);
    await page.evaluate(() => document.fonts.ready);
    report.title = await page.title();
    report.finalUrl = page.url();
    report.text = (await page.locator('body').innerText()).slice(0, 8000);
    report.links = await page.locator('a[href]').evaluateAll((links) =>
      links.map((link) => ({
        text: link.textContent,
        href: link.getAttribute('href'),
      })),
    );
    await page.screenshot({
      path: testInfo.outputPath('findavia-public.png'),
      fullPage: false,
    });
  } catch (error) {
    report.error = String(error);
  } finally {
    await writeFile(
      testInfo.outputPath('capture-report.json'),
      JSON.stringify(report, null, 2),
    );
    await context.close();
  }
});
