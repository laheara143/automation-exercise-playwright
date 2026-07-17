import { test, expect} from '@playwright/test';
import { HomePage } from '../pages/homePage';
import { ContactUsPage } from '../pages/contactUsPage';

test('Verify user can fill out the Contact Us Form', async ({page}) =>{
const homePage = new HomePage(page);
const contactUsPage = new ContactUsPage(page);

await page.goto('https://automationexercise.com/');

//Navigate to Contact Us Page
await homePage.navigateToContactUsForm();

//Verify Get In Touch appears
await expect(page.getByText('Get In Touch')).toBeVisible();

//Fill out form and include a file
await contactUsPage.fillContactUsForm('Test', 'JohnnyTest2002@email.com', 'Question','This is my Test Message' );
await contactUsPage.uploadFile('tests/files/sample.pdf');

// Submit form and clicks alert
await contactUsPage.submitForm();

//Verify Message was sent
await expect(page.locator('#contact-page .alert-success')).toBeVisible();

//Return to Homepage
await page.locator('.btn.btn-success').click();

await page.screenshot ({ path: 'verify-form.png' });
});

