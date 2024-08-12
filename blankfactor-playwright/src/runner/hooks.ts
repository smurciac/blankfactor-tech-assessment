import { BeforeAll, AfterAll, Before } from '@cucumber/cucumber';
import {
  chromium,
  webkit,
  Browser,
  Page,
  BrowserContext,
} from '@playwright/test';

let page: Page;
let browser: Browser;
let context: BrowserContext;

BeforeAll(async function () {
  if (process.env.BROWSER?.includes('chrome')) {
    browser = await chromium.launch({ headless: false });
  } else {
    browser = await webkit.launch({ headless: false });
  }
});

Before(async function () {
  context = await browser.newContext();
  page = await context.newPage();
});

// AfterAll(async function () {
//   await page.close();
//   await context.close();
//   await browser.close();
// });

export { page, browser, context };
