import { expect, test} from '@playwright/test';
import { HomePage } from '../pages/homePage';   
import { ProductsPage } from '../pages/productsPage';

test('Verify search bar search results in correct product', async ({page}) => {
    const homePage = new HomePage(page);
    const productspage = new ProductsPage(page);

    await page.goto('https://automationexercise.com/');

    //Navigate to Products page
    await homePage.navigateToProducts();

    //Verify URL is on products page
    await expect(page).toHaveURL('https://automationexercise.com/products');

    //Enter product into search bar
    await productspage.searchProduct('Blue Top');

    //Verify searched items are visible
    await expect(page.locator('.productinfo.text-center').nth(0)).toContainText('Blue Top');

    await page.screenshot ({ path: 'verify-product-search.png' });


})