import { expect } from "@playwright/test";
export class CartPage{
    constructor(page){
        this.page=page;
        this.actualItemNameLocator=page.locator('.inventory_item_name');
        this.priceLocator=page.locator('.inventory_item_price');
        this.cartItems=page.locator('.cart_item');
        this.removedCartItem=page.locator('.removed_cart_item');
        this.cartItemCount=page.locator('.shopping_cart_badge');
        
    }

    async validateCart(ExpectedinventoryItemName){
        const ActualinventoryItemName=await this.actualItemNameLocator.innerText();
        console.log(ActualinventoryItemName);
        await expect(ActualinventoryItemName).toEqual(ExpectedinventoryItemName);
        await expect(this.priceLocator).toBeVisible();
        const priceValue=await this.priceLocator.innerText();
        console.log(priceValue);
    }

    async validateCartwithMultipleProducts(ExpectedinventoryItemNames){
        const ActualinventoryItemName=await this.actualItemNameLocator.allTextContents();
        for(let i=0;i<ActualinventoryItemName.length;i++){
            await expect(ActualinventoryItemName[i]).toEqual(ExpectedinventoryItemNames[i]);
            
        }
        await expect(this.cartItemCount).toHaveText((ActualinventoryItemName.length).toString())
        
    
    }

    async removeProductFromCart(productName){
        const requiredCartItem=this.cartItems.filter({hasText:productName});
        await requiredCartItem.getByRole('button',{name:'Remove'}).click();
        await expect(requiredCartItem).not.toBeVisible();
        await expect(this.removedCartItem).toBeAttached();
        await expect(this.cartItems).toHaveCount(0);


    }
}