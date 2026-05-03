import { test, expect } from '@playwright/test';
import { chromium } from '@playwright/test';
import { InventoryAndCartPage } from '../pages/InventoryAndCartPage';
import { CartPage } from '../pages/CartPage';
test.use({storageState: 'auth/auth.json' })

test.describe('All inventory and cart related tests', async ()=>
{
    test('Add product to cart', async({page})=>{
        await page.goto(`${process.env.BASE_URL}/inventory.html`);
        const inventoryandcart=new InventoryAndCartPage(page);
        await inventoryandcart.verifylogin();
        const ExpectedinventoryItemName=await inventoryandcart.addFirstProductAndValidate();
        const cartpage=new CartPage(page);
        await cartpage.validateCart(ExpectedinventoryItemName);
    })

    test('Add specific product by name',async ({page})=>{
        await page.goto(`${process.env.BASE_URL}/inventory.html`);
        const inventoryandcart=new InventoryAndCartPage(page);
        await inventoryandcart.verifylogin();
        const ExpectedinventoryItemName=await inventoryandcart.addProductByNameAndValidate('Sauce Labs Bike Light');
        const cartpage=new CartPage(page);
        await cartpage.validateCart(ExpectedinventoryItemName);
    })

    test('Remove product from cart', async({page})=>{
        await page.goto(`${process.env.BASE_URL}/inventory.html`);
        const inventoryandcart=new InventoryAndCartPage(page);
        await inventoryandcart.verifylogin();
        const ExpectedinventoryItemName=await inventoryandcart.addProductByNameAndValidate('Sauce Labs Bolt T-Shirt');
        const cartpage=new CartPage(page);
        await cartpage.validateCart(ExpectedinventoryItemName);
        await cartpage.removeProductFromCart('Sauce Labs Bolt T-Shirt');
    })

     test('Add multiple products to cart', async({page})=>{
        await page.goto(`${process.env.BASE_URL}/inventory.html`);
        const inventoryandcart=new InventoryAndCartPage(page);
        await inventoryandcart.verifylogin();
        const productNames=['Sauce Labs Onesie','Test.allTheThings() T-Shirt (Red)', 'Sauce Labs Bolt T-Shirt'];
        const ExpectedinventoryItemNames=await inventoryandcart.addMultipleProductsToCart(productNames);
        const cartpage=new CartPage(page);
        await cartpage.validateCartwithMultipleProducts(ExpectedinventoryItemNames);
        
    })


})