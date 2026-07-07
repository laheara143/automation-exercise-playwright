import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/loginPage';
import { HomePage } from '../pages/homePage';

test("Verify User can logout", async ({page}) => {

  const loginPage = new LoginPage(page);
  const homePage = new HomePage(page);
  const email = `test${Date.now()}@mail.com`;

  //Navigate to Website
  await page.goto('https://automationexercise.com/');

  //Navigate to Log In Page and Enter Log In Info (Create POM file to reduce repeated code for this)
  await homePage.clickSignUpLogin();
  await loginPage.loginAccount( email , 'Testing123');

  //Click Logout BTN
  await homePage.navigateToLogout();

  await page.screenshot ({ path: 'verify-user-logout.png' });
});