import { Page } from "@playwright/test";
import { Driver } from "../../hooks/driver";
import { getEnv } from "../../helper/env/env";

export default class loginPage{

    private page: Page;

    constructor(driver){
        this.page = Driver.page;
    }


    private Elements = {
        "organizationID": "LoginTenantForm__textFieldOrganizations",
        "userName":"LoginTenantForm__textFieldUsername",
        "password": "LoginTenantForm__textFieldPassword",
        "btnLogin": "LoginTenantForm__buttonLogin"
    }

    async login(){
        await this.page.goto(process.env.BASE_URL);
    }

    async inputValidUserInfo(ordID, userName, password){
        await this.page.getByTestId(this.Elements.organizationID).type(ordID);
        await this.page.getByTestId(this.Elements.userName).type(userName);
        await this.page.getByTestId(this.Elements.password).type(password);
        await this.page.click(this.Elements.btnLogin);
        await this.page.pause();
    }

    async assertLoginSuccess(){
        
    }

}