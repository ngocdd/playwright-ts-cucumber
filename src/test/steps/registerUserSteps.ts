import { Given, When, Then } from '@cucumber/cucumber';
import RegisterPage from '../pageObject/registerUserPage';
import { Driver } from '../../hooks/driver';

let registerPage: RegisterPage;

Given('go to register page', async function () {
  registerPage = new RegisterPage(Driver.page);
  registerPage.goToRegisterPage();
  Driver.logger.info("go to register page");
});

When(
  'register user with valid user information {string} {string} {string}',
  async function (string, string2, string3) {
    registerPage.inputValidUserInfor(string, string2, string3, 'Abc123@123', 'Abc123@123');
  }
);

Then('register success', async function () {
  // write sql comment to check duplicate values
});
