import { Page, expect } from '@playwright/test';

export class CartPage {
    constructor(private page: Page) {}
    
    async verifyTotal(price:string){
        await expect(this.page.locator('.cart_total_price')).toHaveText("Rs. " + price);

    }

        async navigateToCart(){
        await this.page.click('text=View Cart');
    }


}