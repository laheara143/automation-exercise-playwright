import { test, expect} from '@playwright/test';
import { HomePage } from '../pages/homePage';

test('Verify user can fill out the Contact Us Form', async ({page}) =>{
const homePage = new HomePage(page);

await page.goto('https://automationexercise.com/');

await homePage.navigateToContactUsForm();

await expect(page.getByText('Get In Touch')).toBeVisible();



});

