import { Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { page } from '../../../runner/hooks';
import { NewsletterPage } from '../../../pages';

let newsletterPage: NewsletterPage;

Then('User should be able to subscribe to the Newsletter', async function () {
  newsletterPage = new NewsletterPage(page);
  expect(await newsletterPage.userShouldSubscribeToNewsletter()).toContain('✓');
});
