import { test, expect } from "@playwright/test";
require("dotenv").config({ override: true });
test.describe("SignUp", () => {
  test("Success signup flow", async ({ browser }) => {
    const context = await browser.newContext({
      httpCredentials: {
        username: process.env.USER_NAME as string,
        password: process.env.USER_PASS as string,
      },
    });
    const page = await context.newPage();
    await page.goto(process.env.BASE_URL as string);
    const signUpButtonLocator = page.locator("button", { hasText: "Sign up" });
    await signUpButtonLocator.click();
    const nameFieldLocator = page.locator("#signupName");
    await nameFieldLocator.fill("Aqa");
    const lastnameFieldLocator = page.locator("#signupLastName");
    await lastnameFieldLocator.fill("JavaScript");
    const emailFieldLocator = page.locator("#signupEmail");
    await emailFieldLocator.fill(`${Date.now()}-dp@gmail.com`);
    const passwordFieldLocator = page.locator("#signupPassword");
    await passwordFieldLocator.fill("123456789Qq");
    const repasswordFieldLocator = page.locator("#signupRepeatPassword");
    await repasswordFieldLocator.fill("123456789Qq");
    const registerButtonLocator = page.locator("button", {
      hasText: "Register",
    });
    await registerButtonLocator.click();
    const addButton = page.locator("button.btn.btn-primary", {
      hasText: "Add car",
    });
    await expect(addButton).toBeVisible();
    await expect(page).toHaveURL("https://qauto.forstudy.space/panel/garage");
  });
});
