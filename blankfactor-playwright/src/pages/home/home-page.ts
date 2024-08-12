import type { Locator, Page } from '@playwright/test';
import { BasePage } from '../base-page';

export class HomePage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  searchButton(): Locator {
    return this.page().locator('#search-toggle');
  }
  homeLogo(): Locator {
    return this.page().locator('.custom-logo-link');
  }
  searchTextbox(): Locator {
    return this.page().locator('#search-form-2');
  }
  searchSubmitButton(): Locator {
    return this.page().locator('#header-search > form > .search-submit');
  }
  newsletterLink(): Locator {
    return this.page().getByRole('link', { name: 'Newsletter' });
  }
  searchFor(text: string): void {
    this.searchButton().click();
    this.searchTextbox().fill(text);
    this.searchSubmitButton().click();
  }
  searchForUsingUrl(text: string): void {
    const url = `${process.env.BASEURL}/?s=${text.replace(/ /g, '+')}`;
    this.navigateTo(url);
  }
}
