import{ chromium,expect } from '@playwright/test';
import dotenv from 'dotenv';
import { LoginPage } from './pages/LoginPage.js';

dotenv.config();

async function globalSetup(){
    const browser= await chromium.launch();
    const context= await browser.newContext();
    const page= await context.newPage();
    const loginpage=new LoginPage(page);
    await loginpage.navigateToPage();
    await loginpage.loginScenario(process.env.Sauce_USERNAME, process.env.Sauce_PASSWORD);
    await loginpage.validateSuccessfulLogin();
    await page.context().storageState({path: 'auth/auth.json'});
    //await browser.close();


}

export default globalSetup;