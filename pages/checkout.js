import { expect } from "@playwright/test";
export class checkout{
    constructor(page){
        this.page=page;
        this.checkoutbutton=page.locator('#checkout');
        this.firstName=page.getByPlaceholder('First Name');
        this.lastname=page.getByPlaceholder('Last Name');
        this.postalcode=page.getByPlaceholder('Zip/Postal Code');
        this.continueButton=page.locator('#continue');
        this.inventoryItemNameLocator=page.locator('.inventory_item_name');


    }

    async checkout(firstname,lastname,postalcode){
        await this.checkoutbutton.click();
        await this.firstName.fill(firstname);
        await this.lastname.fill(lastname);
        await this.postalcode.fill(postalcode);
        await this.continueButton.click();
    }

    async validateOverviewPage(ExpectedinventoryItemName){
        await expect(this.inventoryItemNameLocator).toHaveText(ExpectedinventoryItemName);

    }
}