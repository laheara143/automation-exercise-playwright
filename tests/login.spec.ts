import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { HomePage } from '../pages/homePage';

test('User can succesfully log in and access their account', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const homePage = new HomePage(page);
  const email = `JohnnyTest2002@email.com`;

  //Navigate to Website
  await page.goto('https://automationexercise.com/');

  //Navigate to Log In Page and Enter Log In Info
  await homePage.clickSignUpLogin();
  await loginPage.loginAccount( email , 'Testing123');
  await expect(page.getByText('Logged in as Johnny')).toBeVisible();
  await page.screenshot ({ path: 'verify-user-login.png' });

});





