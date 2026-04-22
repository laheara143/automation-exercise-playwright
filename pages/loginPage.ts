import { Page, expect } from '@playwright/test';

export class LoginPage {
    constructor(private page: Page) {}
    
    async loginAccount(email : string , password : string){
        await this.page.fill([data-qa="login-email"] , email);
        await this.page.fill([data-qa="login-password"] , password);
        await this.page.click([data-qa="login-button"]);
    }

    async loginErrorMessage(){
        await expect (this.page.locator('text=Your email or password is incorrect!')).toBeVisible();
    }

    async signUpAccount(name : string, email : string){
        await this.page.fill([data-qa="signup-name"] , name);
        await this.page.fill([data-qa="signup-email"] , email);
        await this.page.click([data-qa="signup-button"]);
    }

    async signUpError(){
        await expect (this.page.locator('text=Your email or password is incorrect!')).toBeVisible();
    }

}