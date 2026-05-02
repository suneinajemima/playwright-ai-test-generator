// @ts-check
import { test, expect } from '@playwright/test';
import { chromium } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
const testdata = JSON.parse(JSON.stringify(require("../test-data/LogintestData.json")))
test.use({ storageState: undefined });

test.describe('All tests', async () => {

  test('Valid login scenario',async ({page}) => {
    // const browser= await chromium.launch();
    // const context= await browser.newContext();
    // const page= await context.newPage();
    const loginpage=new LoginPage(page);
    await loginpage.navigateToPage();
    await loginpage.loginScenario(process.env.Sauce_USERNAME, process.env.Sauce_PASSWORD);
    await loginpage.validateSuccessfulLogin();

  } )
  test('Invalid login scenario',async ({page}) => {
    // const browser= await chromium.launch();
    // const context= await browser.newContext();
    // const page= await context.newPage();
    const loginpage=new LoginPage(page);
    await loginpage.navigateToPage();
    await loginpage.loginScenario(testdata.invalidUsername.username,testdata.invalidUsername.password);
    await loginpage.validateUnsuccessfulLogin();
    

  } )
  test.only('Locked-User login scenario',async ({page}) => {
    const loginpage=new LoginPage(page);
    await loginpage.navigateToPage();
    await loginpage.loginScenario(testdata.locked_user.username,testdata.locked_user.password);
    await loginpage.validateLockedUserLogin();
    

  } )


});
