import { spawnSync } from 'node:child_process';
const npm = process.platform === 'win32' ? 'npm.cmd' : 'npm';
const env = {
  ...process.env,
  PORTFOLIO_TEST_CONTENT: 'true',
  SITE_INDEXABLE: 'false',
};
for (const command of ['build', 'test:e2e']) {
  const result = spawnSync(npm, ['run', command], {
    env,
    stdio: 'inherit',
    shell: process.platform === 'win32',
  });
  if (result.error) throw result.error;
  if (result.status !== 0) process.exit(result.status ?? 1);
}
