import {expect ,Page } from '@playwright/test';

export class ProductsPage {
    constructor(private page: Page) {}
    
    async goToHome(){
        await this.page.goto('/');
    }

    async clickSignUpLogin(){
        await this.page.click('a[href="/login"]');
    }

    async navigateToProducts(){
        await this.page.click('a[href="/products"]');
    }

    async viewProductsDetails(){
        await this.page.locator('.nav.nav-pills.nav-justified').first().click();
    }


    async verifyProductDetails(Name : String, Category : String, Price : String){
        const productInfo = this.page.locator('.product-information');

        await expect(productInfo).toContainText(Name);
        await expect(productInfo).toContainText(Category);
        await expect(productInfo).toContainText(Price);
 
    }
    
}