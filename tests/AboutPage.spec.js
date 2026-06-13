import { test, expect } from '@playwright/test';
import { InventoryAndCartPage } from '../pages/InventoryAndCartPage';

test.use({ storageState: 'auth/auth.json' });

test.describe('About Page Navigation', async () => {
    test('Verify user can access About page from application menu', async ({ page }) => {
        await page.goto(`${process.env.BASE_URL}/inventory.html`);
        const inventoryPage = new InventoryAndCartPage(page);
        
        await inventoryPage.verifylogin();
        await inventoryPage.openHamburgerMenu();
        await inventoryPage.clickAbout();
        
        await expect(page).toHaveURL(/saucelabs/);
    });
});
