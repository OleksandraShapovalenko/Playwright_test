import { test, expect } from '@playwright/test';
const SignUp = require('./pages/sign_in')
const errors = require('./pages/sugnup_errors')
test.describe('SignUp', () => {

    test('Success signup flow', async ({ browser }) => {
        const context = await browser.newContext({
            httpCredentials: {
            username: 'guest',
            password: 'welcome2qauto',
            },
        });
        const page = await context.newPage();
        const signUpPage = new SignUp(page);
        await signUpPage.navigate();
        await signUpPage.signup();
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
        const error = new errors(page);
        await error.navigate();
        await error.nameError();
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
        const error = new errors(page);
        await error.navigate();
        await error.lastNameError();
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
        const error = new errors(page);
        await error.navigate();
        await error.incorrectEmail();
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
        const error = new errors(page);
        await error.navigate();
        await error.shortPassword();
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
        const error = new errors(page);
        await error.navigate();
        await error.emptyRePassword();
        const errorMessage = page.locator('p', { hasText: 'Re-enter password required' });
        await expect(errorMessage).toBeVisible()
    })

})