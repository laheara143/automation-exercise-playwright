import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { HomePage } from '../pages/homePage';

test('User can succesfully sign up and create an account', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const homePage = new HomePage(page);
  const email = `test${Date.now()}@mail.com`;

  //Navigate to Website
  await page.goto('https://automationexercise.com/');

  //Navigate to Sign Up Page and Enter Sign Up Info
  await homePage.clickSignUpLogin();
  await loginPage.signUpAccount('Test User' , email);

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

  await page.screenshot ({ path: 'before-gender-click.png' });


  //Fill in Personal Information
  await loginPage.fillPersonalInfo({
  fName: 'Johnny',
  lName: 'Test',
  mNumber: '1234567890'
});

  //Fill in Address Information
  await loginPage.fillInAddressInfo({
  company : 'Test Company', 
  address : '123 address st', 
  country : 'United States',
  state : 'CT', 
  city : 'Hartford',
  zipCode : '12345' 
});


  //Verify Success Message

});





