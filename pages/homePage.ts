import { Page } from '@playwright/test';

export class HomePage {
    constructor(private page: Page) {}

    async addFirstProductToCart(){
        await this.page.locator('.product-overlay').first().hover();
        await this.page.locator('text=Add to cart').first().click();
    }

    async clickViewCart(){
        await this.page.click('text=View Cart');
    }

}