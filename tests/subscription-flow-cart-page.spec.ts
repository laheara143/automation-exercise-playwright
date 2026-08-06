import {test, expect} from '@playwright/test';
import { HomePage } from '../pages/homePage';   

test('Verify User can succesfuly subscribe to the newsletter in the footer of the Cart Page', async ({page}) =>{
    const homePage = new HomePage(page);
    const email = `JohnnyTest2002@email.com`;
    
    await page.goto('http://automationexercise.com');

    await page.screenshot ({ path: 'debug-verify-subscription-cart-page.png' });

    //Navigate to Cart Page
    await homePage.clickCart();
    
    //Verify Subscription Input
    await expect (page.locator('.single-widget')).toContainText('Subscription');
 
    //Enter email and submit 
    await page.fill('#susbscribe_email', email );
    await page.locator('.btn.btn-default').nth(0).click()

    //Verify success message
    await expect (page.locator('.alert-success.alert')).toContainText('You have been successfully subscribed!')

    await page.screenshot ({ path: 'verify-subscription-cart-page.png' });
});