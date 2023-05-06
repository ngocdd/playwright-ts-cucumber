import { LaunchOptions, chromium, firefox, webkit } from "@playwright/test"

// lauch options
const options: LaunchOptions = {
    headless: true
}

// create browser manager functions
export const browserManager = () =>{
    // get list supported browser from env variable
    const browserType = process.env.BROWSER;
    // run browser base on input env
    switch(browserType){
        case "chrome":
            return chromium.launch(options);s
        case "firefox":
            return firefox.launch(options);
        case "webkit":
            return webkit.launch(options);
        default:
            throw new Error("please set browser to run test!");
            
}}

        