import { expect } from "@playwright/test";
export class LoginPage{
    constructor(page){
        this.page=page;
        this.usernamelocator=page.locator('#user-name');
        this.passwordlocator=page.locator('#password');
        this.loginButton=page.locator('#login-button');
    }


    async navigateToPage(){
        await this.page.goto(process.env.BASE_URL)
    }

    async loginScenario(username,password){
        await this.usernamelocator.fill(username);
        await this.passwordlocator.fill(password);
        await this.loginButton.click();
    }

    async validateSuccessfulLogin(){
        await expect(this.page).toHaveURL('https://www.saucedemo.com/inventory.html');
        await expect(this.page.locator('.inventory_list')).toBeVisible();
    }

    async validateUnsuccessfulLogin(){
        await expect(this.page).toHaveURL('https://www.saucedemo.com');
        await expect(this.page.locator('.error-message-container')).toContainText('Epic sadface: Username and password do not match any user in this service');
    }

    async validateLockedUserLogin(){
        await expect(this.page).toHaveURL('https://www.saucedemo.com');
        await expect(this.page.locator('.error-message-container')).toContainText('Epic sadface: Sorry, this user has been locked out.');
    }
   


}