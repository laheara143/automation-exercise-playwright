import { Page } from '@playwright/test';

export class HomePage {
    constructor(private page: Page) {}

    async addFirstProductToCart(){
        await this.page.locator('text=Add to cart').first().click();
    }

    async addSecondProductToCart(){
      //  await this.page.locator('.product-overlay .add-to-cart').nth(1).click();
      await this.page.locator('[data-product-id="2"]').first().click();
    }

    async clickViewCart(){
        await this.page.click('text=View Cart');
    }

    async clickContinue(){
        await this.page.click('text=Continue Shopping');
    }

    async clickCart(){
        await this.page.click('text= Cart');
    }
    async clickSignUpLogin(){
        await this.page.click('text= Signup / Login');

    }
    
    async navigateToProducts(){
        await this.page.click('text= Products');

    }

        async navigateToLogout(){
        await this.page.click('text= Logout');

    }

    async navigateToContactUsForm(){
        await this.page.click('text= Contact us');

    }
        async navigateToTestCasePage(){
        await this.page.click('text= Test Cases');

    }
}