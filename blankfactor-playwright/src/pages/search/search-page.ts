import type { Locator, Page } from '@playwright/test';
import { BasePage } from '../base-page';

export class SearchPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  entryTitles(): Locator {
    return this.page().locator('.entry-title').nth(0);
  }
  clickTitleIfMatches(): void {
    this.entryTitles().click();
  }
}
