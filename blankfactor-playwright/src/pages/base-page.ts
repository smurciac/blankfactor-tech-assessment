import type { Page, Response } from '@playwright/test';

export class BasePage {
  private _page: Page;
  private BASEURL: string = process.env.BASEURL || '';

  constructor(page: Page) {
    this._page = page;
  }

  page(): Page {
    return this._page;
  }
  navigateTo(url = ''): Promise<Response | null> {
    return this._page.goto(url === '' ? this.BASEURL : url, {
      waitUntil: 'domcontentloaded',
    });
  }
  getCurrentUrl(): String {
    return this._page.url();
  }
  delay = (milliseconds: number | undefined) =>
    new Promise((resolve) => setTimeout(resolve, milliseconds));
}
