import { expect, test} from '@playwright/test';
import {ProductsPage} from '../pages/productsPage'

test('Verify User can navigate to All products page and verify Product Details', async ({page}) =>{
    const productspage = new ProductsPage(page);

    //Navigate to AUomation Exercise
    await page.goto('https://automationexercise.com/');

    //Navigate to All Products Page
    await productspage.navigateToProducts();

    //Verify User is on ALL Products Page
    await expect(page).toHaveURL('/products/');

    //Verify the products list is visible
    await expect (page.locator('.features_items')).toBeVisible();

    //View details of FIRST product
    await productspage.viewProductsDetails();

    //Verify User is on FIRST Products detail page
    await expect(page).toHaveURL('/product_details/1/')

    //Verify the details page is visible
    await productspage.verifyProductDetails('Blue Top','Category: Women > Tops', 'Rs. 500');

    await page.screenshot ({ path: 'verify-product-details.png' });
});