import { Page } from "@playwright/test";
import { Driver } from "../../hooks/driver";

export default class homePage{

    private page: Page;

    constructor(driver){
        this.page = Driver.page;
    }

    private elements = {
        elements: "//h5[contains(text(),'Elements')]",


    }



    async goToElementsPage(){
        await this.page.goto(process.env.BASE_URL);
        await this.page.locator(this.elements.elements).click();
        // await this.page.pause();
    }
    async pausePage(){
        await this.page.pause();
    }


}