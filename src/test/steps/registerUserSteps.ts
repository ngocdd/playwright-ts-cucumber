import { Given, When, Then } from '@cucumber/cucumber';
import loginPage from '../pageObject/loginPage';
import { Driver } from '../../hooks/driver';

let page: loginPage;


Given('user go to login page', async function () {
  page = new loginPage(Driver.page);
  page.login();
});

When('user login with valid information {string} {string} {string}', async function (organizationID, userName, password) {
  page.inputValidUserInfo(organizationID, userName, password);
});


Then('user login success', async function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});