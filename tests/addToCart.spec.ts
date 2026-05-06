import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { HomePage } from '../pages/homePage';

test('User can succesfully add products to the cart', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const homePage = new HomePage(page);

  //Navigate to Website
  await page.goto('https://automationexercise.com/');

  //Navigate to Products page
  await homePage.navigateToProducts(); 

});





