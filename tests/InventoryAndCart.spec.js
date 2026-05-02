import { test, expect } from '@playwright/test';
import { chromium } from '@playwright/test';
import { InventoryAndCartPage } from '../pages/InventoryAndCartPage';
test.use({storageState: 'auth/auth.json' })

test.describe('All inventory and cart related tests', async ()=>
{
    test.only('Add product to cart', async({page})=>{
        await page.goto(`${process.env.BASE_URL}/inventory.html`);
        const inventoryandcart=new InventoryAndCartPage(page);
        await inventoryandcart.verifylogin();
        await inventoryandcart.addProductAndValidate();
    })


})