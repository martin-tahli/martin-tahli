import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readdirSync, readFileSync } from 'node:fs';

const directory = new URL('../../.github/workflows/', import.meta.url);
const workflow = readFileSync(new URL('pages.yml', directory), 'utf8');
const verify = workflow.split('  verify:\n')[1]?.split('  deploy:\n')[0] ?? '';
const deploy = workflow.split('  deploy:\n')[1] ?? '';

test('only the reviewed portfolio pipeline is runnable', () => {
  const files = readdirSync(directory).filter((name) => /\.ya?ml$/.test(name));
  assert.deepEqual(files, ['pages.yml']);
});

test('only branch pushes and manual runs trigger the pipeline', () => {
  assert.equal(workflow.match(/^on:/gm)?.length, 1);
  const events = workflow.match(/^on:\n((?:[ \t].*\n|\n)*)/m)?.[1]?.trimEnd();
  assert.equal(
    events,
    [
      '  push:',
      '    branches:',
      '      - main',
      "      - 'feat/**'",
      "      - 'fix/**'",
      "      - 'chore/**'",
      "      - 'docs/**'",
      '  workflow_dispatch:',
    ].join('\n'),
  );
});

test('every job uses self-hosted execution without a hosted fallback', () => {
  const runners = [...workflow.matchAll(/^    runs-on: (.+)$/gm)];
  assert.equal(runners.length, 2);
  for (const match of runners) assert.equal(match[1], 'self-hosted');
});

test('verification is restricted to the exact repository and owner', () => {
  assert.match(verify, /github.repository == 'martin-tahli\/martin-tahli'/);
  assert.match(verify, /github.actor == github.repository_owner/);
  assert.match(verify, /github.triggering_actor == github.repository_owner/);
});

test('verification cannot write source or publish', () => {
  assert.doesNotMatch(workflow, /contents:\s*write/);
  assert.doesNotMatch(verify, /pages:\s*write|id-token:\s*write/);
  assert.match(verify, /persist-credentials: false/);
});

test('deployment requires successful main verification', () => {
  assert.match(deploy, /needs: verify/);
  assert.match(deploy, /if: github.ref == 'refs\/heads\/main'/);
  assert.match(deploy, /pages: write/);
  assert.match(deploy, /id-token: write/);
  assert.match(deploy, /name: github-pages/);
  assert.doesNotMatch(workflow, /continue-on-error:/);
});

test('only verified normal output is published without indexing', () => {
  assert.match(verify, /run: npm run verify/);
  assert.match(verify, /path: dist\n/);
  assert.match(verify, /test -s dist\/404.html/);
  assert.match(verify, /DO_NOT_PUBLISH_FIXTURE/);
  assert.doesNotMatch(verify, /path: test-dist/);
  assert.match(workflow, /SITE_INDEXABLE: 'false'/);
  assert.match(workflow, /PORTFOLIO_TEST_CONTENT: 'false'/);
});

test('all external actions are pinned to full commit hashes', () => {
  const actions = [...workflow.matchAll(/uses: ([^\s]+)(?:\s|$)/g)];
  assert.ok(actions.length >= 5);
  for (const match of actions) {
    assert.match(match[1], /^[\w-]+\/[\w-]+@[a-f0-9]{40}$/);
  }
});

test('runner host packages and services are not modified', () => {
  assert.doesNotMatch(
    workflow,
    /--with-deps|\bsudo\b|\bapt-get\b|\bsystemctl\b/,
  );
  assert.match(verify, /run: npx playwright install chromium/);
  assert.equal(workflow.match(/timeout-minutes:/g)?.length, 2);
});

// Runner context is unavailable in job-level env; resolve it in a running step.
test('runner paths are resolved after a runner has accepted the job', () => {
  const jobConfiguration = verify.split('    steps:')[0];
  assert.doesNotMatch(jobConfiguration, /\$\{\{\s*runner\./);
  assert.match(verify, /PLAYWRIGHT_BROWSERS_PATH=%s\/portfolio-playwright/);
  assert.match(verify, /"\$RUNNER_TEMP" >> "\$GITHUB_ENV"/);
});

test('browser startup is checked before either browser suite', () => {
  const preflight = verify.indexOf('run: node scripts/check-browser.mjs');
  const root = verify.indexOf('run: npm run build && npm run test:e2e');
  const project = verify.indexOf('run: npm run verify');
  assert.ok(preflight >= 0 && preflight < root && root < project);
  const script = readFileSync(
    new URL('../../scripts/check-browser.mjs', import.meta.url),
    'utf8',
  );
  assert.match(script, /await chromium.launch\(\)/);
  assert.match(script, /process.exitCode = 1/);
});
