import { BeforeAll, AfterAll, Before, After, AfterStep, BeforeStep, Status } from "@cucumber/cucumber";
import { chromium, Browser, BrowserContext } from "@playwright/test";
import { pageFixture } from "./pageFixture";



let browser: Browser;
let context: BrowserContext;



BeforeAll(async function () {
    browser = await chromium.launch({headless: false});
})


Before(async function(){
    context = await browser.newContext();
    const page = await context.newPage();  
    pageFixture.page = page;
});


BeforeStep(async function({pickle}){
    
})


AfterStep(async function({pickle, result}){
    const time: number = Date.now();
    await pageFixture.page.waitForLoadState('networkidle');
    const img = await pageFixture.page.screenshot({path: "./test-results/screenshots/" +time+".png", type: "png", fullPage: true, timeout: 1000});
    await this.attach(img, "image/png");
})



After(async function({result}){
    console.log(result?.status);
    await  pageFixture.page.close();
    await  context.close();
})

AfterAll(async function() {
    await browser.close();
})
