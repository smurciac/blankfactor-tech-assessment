import { defineConfig, devices } from '@playwright/test';

require('dotenv').config();

export default defineConfig({
  // Look for test files in the "tests" directory, relative to this configuration file.
  testDir: 'src/test/features',

  // Default timeout for Playwright.
  timeout: 5 * 60 * 1000,

  // Run all tests in parallel.
  fullyParallel: true,

  // Fail the build on CI if you accidentally left test.only in the source code.
  forbidOnly: !!process.env.CI,

  // Retry on CI only.
  retries: process.env.CI ? 2 : 0,

  // Opt out of parallel tests on CI.
  workers: process.env.CI ? 1 : undefined,

  // Reporter to use
  reporter: 'html',

  use: {
    // Base URL to use in actions like `await page.goto('/')`.
    baseURL: process.env.BASEURL,

    // 20 seconds timeout for actions like click, type, etc.
    actionTimeout: 20000,

    // 45 seconds timeout for page navigation
    navigationTimeout: 45000,

    // Collect trace when retrying the failed test.
    trace: 'on-first-retry',
  },

  expect: {
    timeout: 10000, // 10 seconds timeout for expect assertions
  },
  // Configure projects for major browsers.
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
