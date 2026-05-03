import { test, expect } from '@playwright/test';
import { chromium } from '@playwright/test';
import { InventoryAndCartPage } from '../pages/InventoryAndCartPage';
import { CartPage } from '../pages/CartPage';
test.use({storageState: 'auth/auth.json' })

test.describe('All sorting related tests', async ()=>
{
    test('sorting price low to high', async({page})=>{
        await page.goto(`${process.env.BASE_URL}/inventory.html`);
        const inventoryandcart=new InventoryAndCartPage(page);
        await inventoryandcart.verifylogin();
        await inventoryandcart.sortingLowtoHigh();



    })
    test('sorting price high to low', async({page})=>{
        await page.goto(`${process.env.BASE_URL}/inventory.html`);
        const inventoryandcart=new InventoryAndCartPage(page);
        await inventoryandcart.verifylogin();
        await inventoryandcart.sortingHightoLow();



    })
})