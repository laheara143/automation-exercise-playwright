import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { HomePage } from '../pages/homePage';

test('Verify User can login with incorrect creditals and confirm unsuccessful login', async ({page}) =>{
 const loginPage = new LoginPage(page);
 const homePage = new HomePage(page);
 const email = `JohnnyTest2002@email.com`;

 await page.goto('https://automationexercise.com/');

 //Login with Incorrect Password
 await homePage.clickSignUpLogin();
 await loginPage.loginAccount(email, 'Testing12345')

 //Click Login and Login Error Message Occurs
 await page.locator('[data-qa="login-button"]').click();
 await expect(page.getByText('Your email or password is incorrect!')).toBeVisible();
 await page.screenshot ({ path: 'verify-user-login-negative.png' });

});