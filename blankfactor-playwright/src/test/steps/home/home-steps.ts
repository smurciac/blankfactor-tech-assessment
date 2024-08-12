import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { page } from '../../../runner/hooks';
import { HomePage } from '../../../pages';

let homePage: HomePage;

Given('User must launch home page', async function () {
  homePage = new HomePage(page);
  await homePage.navigateTo();
});

When('User must search {string}', async function (text: string) {
  homePage.searchForUsingUrl(text);
});

When('User must open the newsletter page', async function () {
  homePage.newsletterLink().click();
});

Then('Should display Home page', async function () {
  await expect(homePage.homeLogo()).toBeInViewport();
});
