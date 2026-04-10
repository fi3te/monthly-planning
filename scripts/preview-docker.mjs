import { spawn } from 'node:child_process';
import { setTimeout as delay } from 'node:timers/promises';
import open from 'open';

const previewUrl = 'http://localhost:8080/monthly-planning/';

const child = spawn('docker', ['compose', 'up', '--build'], {
  stdio: 'inherit',
  shell: true,
  cwd: process.cwd(),
});

async function waitUntilReachable() {
  const deadline = Date.now() + 15_000;
  while (Date.now() < deadline) {
    try {
      const res = await fetch(previewUrl, { redirect: 'manual' });
      if (res.ok || (res.status >= 300 && res.status < 400)) {
        return;
      }
    } catch {
      // ignore errors like ECONNREFUSED and others
    }
    await delay(400);
  }
  console.error(`Timeout: ${previewUrl} is not reachable.`);
}

(async () => {
  try {
    await waitUntilReachable();
    await open(previewUrl);
  } catch (e) {
    console.error(e);
  }
})();

child.on('exit', (code, signal) => {
  if (signal) {
    process.exit(1);
  }
  process.exit(code ?? 0);
});
