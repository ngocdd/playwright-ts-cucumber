// import { Browser, Page } from "@playwright/test";

import { Given, When, Then } from "@cucumber/cucumber";
import { Page, chromium, Browser } from "@playwright/test";
import { pageFixture } from "../../hooks/pageFixture";
let page: Page;
let browser: Browser;


Given('go to google.com', async function () {

    await pageFixture.page.goto("https://www.google.com/");
});


When('search with keyword is HTN', async function () {
    await pageFixture.page.locator("id=APjFqb").type("htn");
    await pageFixture.page.keyboard.press("Enter");
});


Then('result contain HTN keyword', async function () {
    await pageFixture.page.locator('name="q"').getByText("HTN");
});
