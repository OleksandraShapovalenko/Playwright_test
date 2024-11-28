import { test as setup, expect } from "@playwright/test";
import path from "path";

const authFile = path.join(__dirname, "../playwright/.auth/user.json");

setup("authenticate", async ({ browser }) => {
  const context = await browser.newContext({
    httpCredentials: {
      username: "guest",
      password: "welcome2qauto",
    },
  });
  const page = await context.newPage();
  await page.goto(process.env.BASE_URL as string);
  await page.locator("button", { hasText: "Sign In" }).click();

  await page.getByLabel("Email").fill("17-dp@test.com");
  await page.getByLabel("Password").fill("123456789Qq");
  await page.locator("button", { hasText: "Login" }).click();

  await page.waitForURL("https://qauto.forstudy.space/panel/garage");

  await expect(page.locator("button", { hasText: "Add car" })).toBeVisible();

  await page.context().storageState({ path: authFile });
});
