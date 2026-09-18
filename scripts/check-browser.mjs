import { chromium } from '@playwright/test';

// Fail once on runner setup errors before launching the full browser suite.
try {
  const browser = await chromium.launch();
  await browser.close();
  console.log('Chromium startup passed. Browser tests can run.');
} catch (error) {
  console.error('Chromium cannot start in this runner environment.');
  console.error(error instanceof Error ? error.message : String(error));
  console.error(
    'Provision the browser OS dependencies in the dedicated runner image. ' +
      'See docs/DEPLOYMENT.md; no tests or deployment gates were bypassed.',
  );
  process.exitCode = 1;
}
