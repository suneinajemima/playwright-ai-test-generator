import { expect } from "@playwright/test";

export class InventoryAndCartPage{
    constructor(page){
        this.page=page;
        this.appLogo=page.locator('.app_logo');
        this.inventoryList=page.locator('.inventory_list');
        this.inventoryitems=page.locator('.inventory_item');
        this.inventoryItemNameLocator=this.inventoryitems.locator('.inventory_item_name ');
        this.addToCartbutton=this.inventoryitems.locator('#add-to-cart-sauce-labs-backpack');
        this.cartCount=page.locator('.shopping_cart_badge');
        this.actualItemNameLocator=page.locator('.inventory_item_name');
    }

    async verifylogin(){
        await expect(this.appLogo).toHaveText('Swag Labs');
        await expect(this.page).toHaveURL('https://www.saucedemo.com/inventory.html');
        await expect(this.inventoryList).toBeVisible();
    }

    async addProductAndValidate(){
        await this.addToCartbutton.first().click();
        await expect(this.cartCount).toHaveText('1');
        const ExpectedinventoryItemName=await this.inventoryItemNameLocator.first().innerText();
        console.log(ExpectedinventoryItemName);
        await this.cartCount.click();
        await expect(this.page).toHaveURL('https://www.saucedemo.com/cart.html');
        const ActualinventoryItemName=await this.actualItemNameLocator.innerText();
        console.log(ActualinventoryItemName);
        await expect(ActualinventoryItemName).toEqual(ExpectedinventoryItemName);
        
    }



    

}