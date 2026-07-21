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
        await expect(this.page.locator('.newarrival')).toHaveText('' + Name);
        await expect(this.page.locator('.newarrival')).toHaveText('' + Category);
        await expect(this.page.locator('.newarrival')).toHaveText('' + Price);
    }
}