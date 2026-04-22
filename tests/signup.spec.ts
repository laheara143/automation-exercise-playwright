import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { HomePage } from '../pages/homePage';

test('User can succesfully sign up and create an account', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const homePage = new HomePage(page);

  //Navigate to Website
  await page.goto('https://automationexercise.com/');

  //Navigate to Sign Up Page and Enter Sign Up Info
  await homePage.clickSignUpLogin();
  await loginPage.signUpAccount('Testing' , 'Testing1234@gmail.com');

  //Fill out rest of Sign Up Form
  

  //Verify Success Message

});





