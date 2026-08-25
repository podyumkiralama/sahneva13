import { defineConfig, devices } from "@playwright/test";

const port = 3107;

export default defineConfig({
  testDir: "./tests/a11y",
  fullyParallel: false,
  retries: 0,
  timeout: 60_000,
  reporter: "line",
  use: {
    baseURL: `http://127.0.0.1:${port}`,
    // The production site enforces Trusted Types. Test-only CSP bypass lets
    // Playwright inject axe without weakening the application's headers.
    bypassCSP: true,
    trace: "retain-on-failure",
  },
  webServer: {
    command: `npm run dev -- --hostname 127.0.0.1 --port ${port}`,
    url: `http://127.0.0.1:${port}`,
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
  projects: [
    {
      name: "chromium-desktop",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
});
