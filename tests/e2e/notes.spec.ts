import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { site } from '../../config/site.mjs';
import { withBase } from '../../src/utils/paths';

const notes = [
  {
    slug: 'a-working-screen-is-not-a-verified-workflow',
    title: 'A working screen is not a verified workflow',
    related: ['Findavia →'],
  },
  {
    slug: 'the-ai-should-not-become-the-accounting-engine',
    title: 'The AI should not become the accounting engine',
    related: ['Treasury →'],
  },
  {
    slug: 'a-passing-test-is-not-evidence-unless-it-can-fail',
    title: 'A passing test is not evidence unless it can fail',
    related: ['Findavia →', 'Portfolio publishing system →'],
  },
];

test.describe('published engineering notes', () => {
  test.skip(
    site.testContent,
    'Production notes are not part of fixture builds.',
  );

  test('replace the empty state on Home and Notes', async ({ page }) => {
    for (const route of ['/', '/notes/']) {
      await page.goto(withBase(route, site.base));
      await expect(page.locator('.note-row')).toHaveCount(3);
      await expect(
        page.getByText('No notes are published yet.', { exact: true }),
      ).toHaveCount(0);
      await expect(
        page.getByText('Nothing published yet.', { exact: true }),
      ).toHaveCount(0);

      for (const note of notes) {
        const link = page.getByRole('link', {
          name: note.title,
          exact: true,
        });
        await expect(link).toHaveAttribute(
          'href',
          withBase('/notes/' + note.slug + '/', site.base),
        );
      }
    }
  });

  for (const note of notes) {
    test(
      note.title + ' is accessible and linked to evidence',
      async ({ page }) => {
        const response = await page.goto(
          withBase('/notes/' + note.slug + '/', site.base),
        );
        expect(response?.status()).toBe(200);
        await page.evaluate(() => document.fonts.ready);

        await expect(page.getByRole('heading', { level: 1 })).toHaveText(
          note.title,
        );
        await expect(
          page.getByRole('heading', { name: 'Related work' }),
        ).toBeVisible();

        for (const related of note.related) {
          await expect(
            page.getByRole('link', { name: related, exact: true }),
          ).toBeVisible();
        }

        expect(
          await page.evaluate(
            () => document.documentElement.scrollWidth <= innerWidth,
          ),
        ).toBe(true);

        const scan = await new AxeBuilder({ page })
          .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
          .analyze();
        expect(scan.violations).toEqual([]);
      },
    );
  }

  test('note articles reflow at narrow widths and 200% text', async ({
    page,
  }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(
      withBase(
        '/notes/a-working-screen-is-not-a-verified-workflow/',
        site.base,
      ),
    );
    await page.evaluate(() => {
      document.documentElement.style.fontSize = '200%';
    });
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
  });
});
