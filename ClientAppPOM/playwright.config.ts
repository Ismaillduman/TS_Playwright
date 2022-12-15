import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';
import { off } from 'process';


const config: PlaywrightTestConfig = {
  testDir: './tests',
  //retries: 1,
  workers:3,//maximum number of concurrent worker processes to use for parallelizing tests

  timeout: 30 * 1000,
  expect: {
   
    timeout: 5000
  },
 
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */

  
  use: {
    /* Maximum time each action such as `click()` can take. Defaults to 0 (no limit). */
    actionTimeout: 0,
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://localhost:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: {
        headless: false, ////then the browser does not run headlessly.
        screenshot:'only-on-failure',
        trace:'on',
        ignoreHTTPSErrors:true,//Whether to ignore HTTPS errors when sending network requests.
        ...devices['Desktop Chrome'],
      },
    },

    {
      name: 'firefox',
      use: {
        headless: false,
        ...devices['Desktop Firefox'],
      },
    },

    {
      name: 'webkit',
      use: {
        headless: false,
        ...devices['Desktop Safari'],
      },
    },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: {
    //     ...devices['Pixel 5'],
    //   },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: {
    //     ...devices['iPhone 12'],
    //   },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: {
    //     channel: 'msedge',
    //   },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: {
    //     channel: 'chrome',
    //   },
    // },
  ],

  /* Folder for test artifacts such as screenshots, videos, traces, etc. */
  // outputDir: 'test-results/',

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   port: 3000,
  // },
  
};

export default config;
