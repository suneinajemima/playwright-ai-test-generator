import { checkout } from "../pages/checkout";
import {test,expect} from '@playwright/test';
import { InventoryAndCartPage } from "../pages/InventoryAndCartPage";
import { CartPage } from "../pages/CartPage";
const testdata1 = JSON.parse(JSON.stringify(require("../test-data/checkouttestData.json")));

test.use({storageState: 'auth/auth.json' })
test('checkout flow', async({page})=>{
    await page.goto(`${process.env.BASE_URL}/inventory.html`);
    const inventoryandcart=new InventoryAndCartPage(page);
    await inventoryandcart.verifylogin();
    const ExpectedinventoryItemName=await inventoryandcart.addProductByNameAndValidate('Sauce Labs Bike Light');
    const cartpage=new CartPage(page);
    await cartpage.validateCart(ExpectedinventoryItemName);
    const checkOut=new checkout(page);
    await checkOut.checkout(testdata1.full_name, testdata1.last_name, testdata1.postalcode);
    await checkOut.validateOverviewPage(ExpectedinventoryItemName);
})