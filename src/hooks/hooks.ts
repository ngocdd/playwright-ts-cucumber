import { BeforeAll, AfterAll, Before, After, AfterStep, BeforeStep, setDefaultTimeout } from "@cucumber/cucumber";
import { Browser, BrowserContext } from "@playwright/test";
import { Driver } from "./driver";
import { browserManager } from "../helper/browsers/browserManager";
import { getEnv } from "../helper/env/env";

// init variables
let context: BrowserContext;
let browser: Browser;

BeforeAll(async function () {
    // run browser from browser manager
    getEnv();
    setDefaultTimeout(30000);
    browser = await browserManager();
    // create new browser and context
    context = await browser.newContext();
    const page = await context.newPage();  
    // add new context into driver to reuse
    Driver.page = page;
})

Before(async function(){
  
});

BeforeStep(async function({pickle}){
    
})

AfterStep(async function({pickle, result}){
    const time: number = Date.now();
    // wait page finished render before take a screenshot
    await Driver.page.waitForLoadState('networkidle');
    // take screenshot and save into ./test-results/screenshots folder with name is current minisecond time
    const img = await Driver.page.screenshot({path: "./test-results/screenshots/" +time+".png", type: "png", fullPage: true, timeout: 1000});
    // aadd screenshot into report
    this.attach(img, "image/png");
})

After(async function({result}){
   
})

AfterAll(async function() {
    // close page
    // await Driver.page.close();
    // close browser context
    // await context.close();
    // close browser
    // await browser.close();
})
