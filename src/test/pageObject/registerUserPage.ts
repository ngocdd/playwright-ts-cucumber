import { Page } from "@playwright/test";
import { Driver } from "../../hooks/driver";


export default class RegisterPage{

    private page: Page;

    constructor(driver){
        this.page = Driver.page;
    }


    private Elements = {
        fName: "input[formcontrolname='firstname']",
        lname: "input[formcontrolname='lastname']",
        userName: "input[formcontrolname='username']",
        password: "input[formcontrolname='password']",
        confirmPassword: "input[formcontrolname='confirmPassword']",
        maleInput: "input[value='Male']",
        femaleInput: "input[value='Female']",
        maleRadioBtn: "//span[contains(text(),'Male')]",
        femaleRadioBtn: "//span[contains(text(),'Female')]",
        regBtn: "button[color='primary']"
    }

    async goToRegisterPage(){
        await this.page.goto("https://bookcart.azurewebsites.net/register");
    }

    async inputValidUserInfor(FirstName, LastName, Username, Password1, Password2){
        await this.page.locator(this.Elements.fName).type(FirstName);
        await this.page.fill(this.Elements.lname, LastName);
        await this.page.fill(this.Elements.userName, Username);
        await this.page.fill(this.Elements.password, Password1);
        await this.page.fill(this.Elements.confirmPassword, Password2);
        await this.page.locator(this.Elements.femaleRadioBtn).click();
        await this.page.locator(this.Elements.regBtn).click();
    }

    async assertRegisterCuccess(){
        
    }

}