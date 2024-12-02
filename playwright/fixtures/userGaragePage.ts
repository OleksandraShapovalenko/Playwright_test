import { test as base, expect } from "@playwright/test";
import dotenv from "dotenv";
import path from 'path';

const authFile = path.join(__dirname, '../.auth/user.json');

export const test = base.extend<{
    userGarage: any; 
  }>({
    userGarage: async ({ browser }, use) => {
        const loggedInContext = await browser.newContext({
          httpCredentials: {
            username: 'guest',
            password: 'welcome2qauto',
          },
        });

        const loggedInPage = await loggedInContext.newPage();
        await loggedInPage.goto('https://qauto.forstudy.space/panel/garage');

        await use(loggedInPage);
    
        await loggedInContext.close();
      },
    });
    
  test.use({ storageState: authFile })

  export { expect } from '@playwright/test';