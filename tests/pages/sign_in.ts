import { test, expect } from '@playwright/test'; 
require("dotenv").config({ override: true });
class SignUp{
    page: any;
    signUpButton: any;
    nameField: any;
    lastnameField: any;
    emailField: any;
    passwordField: any;
    repasswordField: any;
    registerButton: any;
    addButton: any;
    constructor(page) {
        this.page = page;

        this.signUpButton = page.locator('button', { hasText: 'Sign up' });
        this.nameField = page.locator('#signupName');
        this.lastnameField = page.locator('#signupLastName');
        this.emailField = page.locator('#signupEmail');
        this.passwordField = page.locator('#signupPassword');
        this.repasswordField = page.locator('#signupRepeatPassword');
        this.registerButton = page.locator('button', { hasText: 'Register' });
        this.addButton = page.locator('button.btn.btn-primary', { hasText: 'Add car' });

    }
    async navigate() {
        await this.page.goto('https://qauto.forstudy.space/');
    }
    async signup() {
        await this.signUpButton.click()

        await this.nameField.fill('Low')
        await this.lastnameField.fill("Sam")
        await this.emailField.fill(`${Date.now()}-dp@test.com`)
        await this.passwordField.fill('123456789Qq')
        await this.repasswordField.fill('123456789Qq')
        await this.registerButton.click()
        await this.page.screenshot({ path: 'screenshot.png' });

    }
}
module.exports = SignUp;