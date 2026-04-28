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

  //Select Title
  await loginPage.selectTitle('Mrs');

  //Fill in password
  await loginPage.fillInPassword('Testing123');

  //Fill out Date of Birth
  await loginPage.selectDOB('1', 'January', '2000');

  //Check off Newsletter and Special Offer Subscriptions
  await loginPage.subscribeToNewsletter();
  await loginPage.subscribeSpecialOffers();

  //Fill in Personal Information
  await loginPage.fillPersonalInfo('Johnny', 'Test', 1234567890);

  //Fill in Address Information
  await loginPage.fillInAddressInfo('Test Company', '123 address st', 'United States', 'CT', 'Hartford', 12345);


  //Verify Success Message

});





