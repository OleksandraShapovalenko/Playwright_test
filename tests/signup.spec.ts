import { test, expect } from '@playwright/test';
test.describe('SignUp', () => {

test('Success signup flow', async ({ browser }) => {
    const context = await browser.newContext({
        httpCredentials: {
          username: 'guest',
          password: 'welcome2qauto',
        },
      });
      const page = await context.newPage();
      await page.goto('https://qauto.forstudy.space/');
      const signUpButtonLocator = page.locator('button', { hasText: 'Sign up' })
      await signUpButtonLocator.click();
      const nameFieldLocator = page.locator('#signupName')
      await nameFieldLocator.fill('Aqa');
      const lastnameFieldLocator = page.locator('#signupLastName')
      await lastnameFieldLocator.fill('JavaScript');
      const emailFieldLocator = page.locator('#signupEmail')
      await emailFieldLocator.fill('13-dp@gmail.com');
      const passwordFieldLocator = page.locator('#signupPassword')
      await passwordFieldLocator.fill('123456789Qq');
      const repasswordFieldLocator = page.locator('#signupRepeatPassword')
      await repasswordFieldLocator.fill('123456789Qq');
      const registerButtonLocator = page.locator('button', { hasText: 'Register' })
      await registerButtonLocator.click();
      const addButton = page.locator('button.btn.btn-primary', { hasText: 'Add car' });
      await expect(addButton).toBeVisible()
      await expect(page).toHaveURL('https://qauto.forstudy.space/panel/garage')
})
test('Short Name field', async ({ browser }) => {
    const context = await browser.newContext({
        httpCredentials: {
          username: 'guest',
          password: 'welcome2qauto',
        },
      });
      const page = await context.newPage();
      await page.goto('https://qauto.forstudy.space/');
      const signUpButtonLocator = page.locator('button', { hasText: 'Sign up' })
      await signUpButtonLocator.click();
      const nameFieldLocator = page.locator('#signupName')
      await nameFieldLocator.fill('S');
      const lastnameFieldLocator = page.locator('#signupLastName')
      await lastnameFieldLocator.click();
      const errorMessage = page.locator('p', { hasText: 'Name has to be from 2 to 20 characters long' });
      await expect(errorMessage).toBeVisible()
})
test('Empty Last Name field', async ({ browser }) => {
    const context = await browser.newContext({
        httpCredentials: {
          username: 'guest',
          password: 'welcome2qauto',
        },
      });
      const page = await context.newPage();
      await page.goto('https://qauto.forstudy.space/');
      const signUpButtonLocator = page.locator('button', { hasText: 'Sign up' })
      await signUpButtonLocator.click();
      const nameFieldLocator = page.locator('#signupName')
      await nameFieldLocator.fill('Sus');
      const lastnameFieldLocator = page.locator('#signupLastName')
      await lastnameFieldLocator.click();
      await lastnameFieldLocator.fill('');
      await nameFieldLocator.click();
      const errorMessage = page.locator('p', { hasText: 'Last name required' });
      await expect(errorMessage).toBeVisible()
})
test('Incorrect email', async ({ browser }) => {
    const context = await browser.newContext({
        httpCredentials: {
          username: 'guest',
          password: 'welcome2qauto',
        },
      });
      const page = await context.newPage();
      await page.goto('https://qauto.forstudy.space/');
      const signUpButtonLocator = page.locator('button', { hasText: 'Sign up' })
      await signUpButtonLocator.click();
      const nameFieldLocator = page.locator('#signupName')
      await nameFieldLocator.fill('Sus');
      const emailFieldLocator = page.locator('#signupEmail')
      await emailFieldLocator.fill('incor-dp@gmailcom');
      await nameFieldLocator.click();
      const errorMessage = page.locator('p', { hasText: 'Email is incorrect' });
      await expect(errorMessage).toBeVisible()
})
test('Short password', async ({ browser }) => {
    const context = await browser.newContext({
        httpCredentials: {
          username: 'guest',
          password: 'welcome2qauto',
        },
      });
      const page = await context.newPage();
      await page.goto('https://qauto.forstudy.space/');
      const signUpButtonLocator = page.locator('button', { hasText: 'Sign up' })
      await signUpButtonLocator.click();
      const nameFieldLocator = page.locator('#signupName')
      await nameFieldLocator.fill('Sus');
      const passwordFieldLocator = page.locator('#signupPassword')
      await passwordFieldLocator.fill('1234');
      await nameFieldLocator.click();
      const errorMessage = page.locator('p', { hasText: 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter' });
      await expect(errorMessage).toBeVisible()
})
test('Empty re-enter password', async ({ browser }) => {
    const context = await browser.newContext({
        httpCredentials: {
          username: 'guest',
          password: 'welcome2qauto',
        },
      });
      const page = await context.newPage();
      await page.goto('https://qauto.forstudy.space/');
      const signUpButtonLocator = page.locator('button', { hasText: 'Sign up' })
      await signUpButtonLocator.click();
      const nameFieldLocator = page.locator('#signupName')
      await nameFieldLocator.fill('Sus');
      const passwordFieldLocator = page.locator('#signupPassword')
      await passwordFieldLocator.fill('123456789Qq');
      const repasswordFieldLocator = page.locator('#signupRepeatPassword')
      await repasswordFieldLocator.click();
      await repasswordFieldLocator.fill('');
      await nameFieldLocator.click();
      const errorMessage = page.locator('p', { hasText: 'Re-enter password required' });
      await expect(errorMessage).toBeVisible()
})

})