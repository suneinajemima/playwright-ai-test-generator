import { expect } from "@playwright/test";

export class InventoryAndCartPage{
    constructor(page){
        this.page=page;
        this.appLogo=page.locator('.app_logo');
        this.inventoryList=page.locator('.inventory_list');
        this.inventoryitems=page.locator('.inventory_item');
        this.inventoryItemNameLocator=this.inventoryitems.locator('.inventory_item_name ');
        this.addToCartbutton=this.inventoryitems.locator('#add-to-cart-sauce-labs-backpack');
        this.cartCountinInventoryPage=page.locator('.shopping_cart_badge');  
        //this.addToCartbuttonForItemSelectedByName=this.inventoryitems.filter({hasText:productName}).getByRole('button',{name:'Add to cart'})  
    }

    async verifylogin(){
        await expect(this.appLogo).toHaveText('Swag Labs');
        await expect(this.page).toHaveURL('https://www.saucedemo.com/inventory.html');
        await expect(this.inventoryList).toBeVisible();
    }

    async addFirstProductAndValidate(){
        await this.addToCartbutton.first().click();
        await expect(this.cartCountinInventoryPage).toHaveText('1');
        const ExpectedinventoryItemName=await this.inventoryItemNameLocator.first().innerText();
        console.log(ExpectedinventoryItemName);
        await this.cartCountinInventoryPage.click();
        await expect(this.page).toHaveURL('https://www.saucedemo.com/cart.html');
        return ExpectedinventoryItemName;
        
        
    }

    async addProductByNameAndValidate(productName){
        
        const addToCartbuttonForItemSelectedByName=this.inventoryitems.filter({hasText:productName}).getByRole('button',{name:'Add to cart'})  
        await addToCartbuttonForItemSelectedByName.click();
        await expect(this.cartCountinInventoryPage).toHaveText('1');
        const ExpectedinventoryItemName=productName;
        await this.cartCountinInventoryPage.click();
        await expect(this.page).toHaveURL('https://www.saucedemo.com/cart.html');
        return ExpectedinventoryItemName;

        

    }

    async addMultipleProductsToCart(productNames){
        const addToCartbuttonForItemSelectedByName = [];
        //const ExpectedinventoryItemNames=[];
        for (let i=0;i<productNames.length;i++){
            addToCartbuttonForItemSelectedByName[i]=this.inventoryitems.filter({hasText:productNames[i]}).getByRole('button',{name:'Add to cart'});
            await addToCartbuttonForItemSelectedByName[i].click();
            await expect(this.cartCountinInventoryPage).toHaveText((i+1).toString());
        }
        await this.cartCountinInventoryPage.click();
        await expect(this.page).toHaveURL('https://www.saucedemo.com/cart.html');
        return productNames;

        


    }



    

}