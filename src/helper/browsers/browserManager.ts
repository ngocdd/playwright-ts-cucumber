import { LaunchOptions, chromium, firefox, webkit } from "@playwright/test"

// launch options
const options: LaunchOptions = {
    headless: false
}

// create browser manager functions
export const browserManager = ()=>{
    // get list supported browser from env variable
    const browserType = process.env.BROWSER;
    // run browser base on input env
    switch(browserType){
        case "chrome":
            // return chrome browser
            return chromium.launch(options);
        case "firefox":
            // return firefox browser
            return firefox.launch(options);
        case "webkit":
            // return webkit browser
            return webkit.launch(options);
        default:
            throw new Error("please set browser to run test!");
    }
}
