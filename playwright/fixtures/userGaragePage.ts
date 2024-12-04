import { test as base, expect } from "@playwright/test";
import dotenv from "dotenv";
import path from 'path';

const authFile = path.join(__dirname, '../.auth/user.json');

export const test = base.extend<{
    userGarage: any; 
  }>({
    userGarage: async ({ page }, use) => {

        await page.goto('https://qauto.forstudy.space/panel/garage');

        await use(page);
    
        await page.close();
      },
    });
    
  test.use({ storageState: authFile })

  export { expect } from '@playwright/test';