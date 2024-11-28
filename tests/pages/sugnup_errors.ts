import { test, expect } from '@playwright/test'; 
require("dotenv").config({ override: true });
class Errors{
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
    async nameError() {
        await this.signUpButton.click()
        await this.nameField.fill('S')
        await this.lastnameField.click()
    }
    async lastNameError() {
        await this.signUpButton.click()
        await this.lastnameField.fill('')
        await this.nameField.click()
    }
    async incorrectEmail() {
        await this.signUpButton.click()
        await this.emailField.fill('test@com')
        await this.nameField.click()
    }
    async shortPassword() {
        await this.signUpButton.click()
        await this.passwordField.fill('1234')
        await this.nameField.click()
    }
    async emptyRePassword() {
        await this.signUpButton.click()
        await this.repasswordField.fill('')
        await this.nameField.click()
    }
}
module.exports = Errors;