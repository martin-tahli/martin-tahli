import { defineConfig } from '@playwright/test';
import { site } from './config/site.mjs';

const deploymentTarget = site.base === '/' ? 'root' : 'project';
const reviewTarget = site.testContent ? 'fixtures' : deploymentTarget;

export default defineConfig({
  testDir: './tests/e2e',
  // Keep each build's evidence when the next browser suite clears its output.
  outputDir: `test-results/${reviewTarget}`,
  fullyParallel: true,
  forbidOnly: true,
  retries: 0,
  workers: 2,
  reporter: [
    ['list'],
    [
      'html',
      { open: 'never', outputFolder: `playwright-report/${reviewTarget}` },
    ],
  ],
  use: {
    baseURL: 'http://127.0.0.1:4321',
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
  },
  projects: [
    {
      name: 'desktop-chromium',
      use: { browserName: 'chromium', viewport: { width: 1440, height: 1000 } },
    },
    {
      name: 'mobile-chromium',
      use: {
        browserName: 'chromium',
        viewport: { width: 390, height: 844 },
        isMobile: true,
        hasTouch: true,
      },
    },
  ],
  webServer: {
    command: 'npm run preview -- --host 127.0.0.1 --port 4321',
    url: `http://127.0.0.1:4321${site.base}`,
    reuseExistingServer: false,
    timeout: 30_000,
  },
});
