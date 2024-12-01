import { test, expect } from "../playwright/fixtures/userPage";

test.describe("Profile Page Tests", () => {
  test("edit profile button", async ({ loggedInPage }) => {
    await loggedInPage.goto("https://qauto.forstudy.space/panel/profile");

    const addButton = await loggedInPage.locator("button", {
      hasText: "Edit profile",
    });
    await expect(addButton).toBeVisible();
  });

  test("intercept profile request", async ({ loggedInPage }) => {
    const data = {
      status: "ok",
      data: {
        userId: 999999999999999,
        photoFilename: "default-user.png",
        name: "Aqa999999999999999999999",
        lastName: "JavaScriptJavaScriptJavaScriptJavaScriptJavaScript",
      },
    };
    await loggedInPage.route("**/api/users/profile", (route) =>
      route.fulfill({
        status: 200,
        body: JSON.stringify(data),
      })
    );

    await loggedInPage.goto("https://qauto.forstudy.space/panel/profile");

    await loggedInPage.screenshot({ path: 'screenshot.png' });
    const profileName = await loggedInPage.locator(".profile_name", {
      hasText: `${data.data.name} ${data.data.lastName}`,
    });
    await expect(profileName).toBeVisible();
  });
});
