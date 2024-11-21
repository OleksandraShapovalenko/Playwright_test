import { test, expect } from '../playwright/fixtures/userGaragePage';

test.describe("Garage Page Tests", () => {
  test("Should display Add Car button", async ({ userGarage }) => {

    const addButton = await userGarage.locator('button', { hasText: 'Add car' });
    await expect(addButton).toBeVisible();
  });
  test("Should display Profile", async ({ userGarage }) => {

    const sideBarProfile = userGarage.locator('a.sidebar_btn.-profile[href="/panel/profile"]');
    await expect(sideBarProfile).toBeVisible();
  });
});