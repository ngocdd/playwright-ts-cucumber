import { Given, When, Then } from '@cucumber/cucumber';
import homePage from '../pageObject/homePage';
import { Driver } from '../../hooks/driver';

let page: homePage;




Given('user go to textbox page', async function () {
    page = new homePage(Driver);
    page.goToElementsPage();
});


When('user submit with all textbox information', async function () {
// Write code here that turns the phrase above into concrete actions
return 'pending';
});


Then('user submit success', async function () {
// Write code here that turns the phrase above into concrete actions
return 'pending';
});