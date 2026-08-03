import {test, expect} from '@playwright/test';

test('Verify User can succesfuly subscribe to the newsletter in the footer', async ({page}) =>{
    const email = `JohnnyTest2002@email.com`;
    
    await page.goto('http://automationexercise.com');
    
    //Verify Subscription Input
    await expect (page.locator('.single-widget')).toContainText('Subscription');
 
    //Enter email and submit 
    await page.fill('#susbscribe_email', email );
    await page.locator('.btn.btn-default').nth(74).click()

    //Verify success message
    await expect (page.locator('.alert-success.alert')).toContainText('You have been successfully subscribed!')

    await page.screenshot ({ path: 'verify-subscription.png' });
});