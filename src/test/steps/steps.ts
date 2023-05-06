// import { Browser, Page } from "@playwright/test";

import { Given, When, Then } from "@cucumber/cucumber";
import { Page, chromium, Browser } from "@playwright/test";
import { driver } from "../../hooks/driver";
let page: Page;
let browser: Browser;


Given('go to google.com', async function () {

    await driver.page.goto("https://www.google.com/");
});


When('search with keyword is HTN', async function () {
    await driver.page.locator("id=APjFqb").type("htn");
    await driver.page.keyboard.press("Enter");
});


Then('result contain HTN keyword', async function () {
    await driver.page.locator('name="q"').getByText("HTN");
});
