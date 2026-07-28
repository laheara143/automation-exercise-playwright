import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { HomePage } from '../pages/homePage';
import { CartPage } from '../pages/cartPage'; 

test('User can succesfully add products to the cart', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const homePage = new HomePage(page);
  const cartPage = new CartPage(page);

  //Navigate to Website
  await page.goto('https://automationexercise.com/');

  await page.screenshot ({ path: 'DebugCart.png' });

  //Navigate to Products page
  await homePage.navigateToProducts(); 


  //Add First Product to Cart
  await homePage.addFirstProductToCart();

  //View Cart
  await cartPage.navigateToCart();

  //Verify Total
  await cartPage.verifyTotal('500');
  await page.locator('.btn.btn-default.check_out').click();
  await page.screenshot ({ path: 'verify-cart.png' });


});





