import type { Locator, Page } from '@playwright/test';
import { BasePage } from '../base-page';

export class NewsletterPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  entryTitles(): Locator {
    return this.page().locator('.entry-title').nth(0);
  }
  emailTextbox(): Locator {
    return this.page().locator('iframe').locator('[name="email"]');
  }
  submitButton(): Locator {
    return this.page().locator('iframe').locator('[type="submit"]');
  }
  userShouldSubscribeToNewsletter(): Promise<string | null> {
    this.emailTextbox().fill(`fakeemail-${this.getRandomNumber()}@gmail.com`);
    this.submitButton().click();
    return this.submitButton().textContent();
  }
  getRandomNumber(): string {
    const randomNum = Math.floor(Math.random() * (999 - 1 + 1)) + 1;
    return randomNum.toString().padStart(3, '0');
  }
}
