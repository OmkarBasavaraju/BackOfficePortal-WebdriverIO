import { Given, When, Then } from "@wdio/cucumber-framework";
import LoginPage from "../../src/pages/login.page";
import loginData from "../../config/loginData";
import ApplicationPage from "../pages/applications.page";

Given(/^I am on the backOffice Portal login page$/, async () => {
  await LoginPage.open("");
});

When(/^I login with username and password$/, async () => {
  await LoginPage.login(loginData.USERNAME, loginData.PASSWORD);
});

When(/^I click on the apply button$/, async () => {
  await ApplicationPage.clickApplyButton();
});

When(/^I click on the Status button$/, async () => {
  await ApplicationPage.clickStatusButton();
});

Then(/^I click on the logout button$/, async () => {
  await ApplicationPage.clickLogoutButton();
});

When(/^I click on the first row of the application$/, async () => {
  await ApplicationPage.clickFirstSubmittedApplication();
});

Then(
  /^I verify that New button is displayed in application tab with text <buttonText>$/,
  async (dataTable: any) => {
    await ApplicationPage.verifyNewButtonText(dataTable.hashes()[0].buttonText);
  }
);

Then(/^I should see a header text as <headerText>$/, async (dataTable: any) => {
  await ApplicationPage.verifyApplicationHeaderText(
    dataTable.hashes()[0].headerText
  );
});

When(/^I select submitted option from the status dropdown$/, async () => {
  await ApplicationPage.selectSubmittedStatus();
});

Then(/^I verify <statusText> text is displayed$/, async (dataTable: any) => {
  await ApplicationPage.verifySubmittedText(dataTable.hashes()[0].statusText);
});
