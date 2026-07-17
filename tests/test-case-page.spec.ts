import {test, expect} from '@playwright/test'
import {HomePage} from '../pages/homePage'

test("Navigate to Test Case page and verify the page loads succesfully", async ({page}) =>{

    const homePage = new HomePage(page);
    await page.goto('http://automationexercise.com');

    //Navigate to Test Case Page
    await homePage.navigateToTestCasePage();

    //Verify User is on Test Case Page
    await expect(page).toHaveURL(/test_cases/);
    await page.screenshot ({ path: 'verify-cart.png' });
});