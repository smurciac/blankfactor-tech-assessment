import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { page } from '../../../runner/hooks';
import { SearchPage } from '../../../pages';

let searchPage: SearchPage;

When('User must open the top result matching the search', async function () {
  searchPage = new SearchPage(page);
  searchPage.clickTitleIfMatches();
});

Then('User should be redirected to the corresponding page', async function () {
  expect(searchPage.getCurrentUrl()).toContain(
    '/reed-jobs-hijo-steve-jobs-yosemite-nuevos-tratamientos-cancer'
  );
});
