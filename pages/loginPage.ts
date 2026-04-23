import { Page, expect } from '@playwright/test';

export class LoginPage {
    constructor(private page: Page) {}
    
    async loginAccount(email : string , password : string){
        await this.page.fill('[data-qa="login-email"]' , email);
        await this.page.fill('[data-qa="login-password"]' , password);
        await this.page.click('[data-qa="login-button"]');
    }

    async loginErrorMessage(){
        await expect (this.page.locator('text=Your email or password is incorrect!')).toBeVisible();
    }

    async signUpAccount(name : string, email : string){
        await this.page.fill('[data-qa="signup-name"]' , name);
        await this.page.fill('[data-qa="signup-email"]' , email);
        await this.page.click('[data-qa="signup-button"]');
    }

    async signUpError(){
        await expect (this.page.locator('text=Your email or password is incorrect!')).toBeVisible();
    }

    async selectTitle(title : 'Mr' | 'Mrs'){
        if (title === 'Mr'){
            await this.page.check('#id_gender1');
        } else {
            await this.page.check('#id_gender2');
    }}

    async fillInPassword(password : string ){
        await this.page.fill('[data-qa="password"]' , password);
    }

    async selectDOB(day : string , month : string , year : string){
        await this.page.selectOption('#days' , day);
        await this.page.selectOption('#months' , month);
        await this.page.selectOption('#years', year);
    }

    async subscribeToNewsletter(){
        await this.page.check('#newsletter');
    }

    async subscribeSpecialOffers(){
        await this.page.check('#optin');
    }       

    async fillPersonalInfo(user: {
        fName : string; 
        lName : string; 
        mNumber : string;
    }){
        await this.page.fill('[data-qa="first_name"]' , user.fName);
        await this.page.fill('[data-qa="last_name"]' , user.lName);
        await this.page.fill('[data-qa="mobile_number"]' , user.mNumber);
    }

    async fillInAddressInfo(user: {
        company : string; 
        address : string; 
        country : string
        state : string; 
        city : string;
        zipCode : string; 
    }){
        await this.page.fill('[data-qa="company"]' , user.company);
        await this.page.fill('[data-qa="address"]' , user.address);
        await this.page.selectOption('#country' , user.country);
        await this.page.fill('[data-qa="state"]' , user.state);
        await this.page.fill('[data-qa="city"]' , user.city);
        await this.page.fill('[data-qa="zipcode"]' , user.zipCode);
    }
    
 
    
    }