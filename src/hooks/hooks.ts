import { BeforeAll, AfterAll, Before, After, AfterStep, BeforeStep, Status } from "@cucumber/cucumber";
import { chromium, Browser, BrowserContext } from "@playwright/test";
import { driver } from "./driver";
import { browserManager } from "../helper/browsers/browserManager";

// init variables
let context: BrowserContext;
let browser: Browser;

BeforeAll(async function () {
    // run chrome browser
    browser = await browserManager();
})

Before(async function(){
    // create new browser and context
    context = await browser.newContext();
    const page = await context.newPage();  
    // add new context into driver to reuse
    driver.page = page;
});

BeforeStep(async function({pickle}){
    
})

AfterStep(async function({pickle, result}){
    const time: number = Date.now();
    // wait page finished render before take a screenshot
    await driver.page.waitForLoadState('networkidle');
    // take screenshot and save into ./test-results/screenshots folder with name is current minisecond time
    const img = await driver.page.screenshot({path: "./test-results/screenshots/" +time+".png", type: "png", fullPage: true, timeout: 1000});
    // aadd screenshot into report
    await this.attach(img, "image/png");
})

After(async function({result}){

    // close driver after each scenario
    await  driver.page.close();
    await  context.close();
})

AfterAll(async function() {
    // close browser after test
    await browser.close();
})
