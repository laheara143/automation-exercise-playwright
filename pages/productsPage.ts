import { Page } from '@playwright/test';

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

}