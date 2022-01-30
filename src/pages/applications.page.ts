import { clickElement, scrollIntoView } from "../../utils/actionCommands";
import {
  isDisplayed,
  stringComparision,
  waitForClickable,
  waitForDisplayed,
} from "../../utils/assertionCommands";

class ApplicationPages {
  get applicationHeadetText() {
    return $(".sc-iBPRYJ.sc-fubCfw.cQRvmw.fzPVFp");
  }

  get btnNew() {
    return $("#widget_application_list_header_new");
  }

  get btnLogout() {
    return $('//span[contains(text(),"Logout")]');
  }

  get btnStatus() {
    return $('//div[contains(text(),"Status")]');
  }

  get statusDropdown() {
    return $("//div[contains(@class,'css-1uccc91-singleValue')]");
  }

  get toggleMenu() {
    return $("#masthead_toggle_menu");
  }

  get btnApply() {
    return $("#filter_container_apply");
  }

  get submittedApplication() {
    return $("//span[normalize-space()='EM-27Jan11']");
  }

  get submittedText() {
    return $(
      "//span[@class='sc-iBPRYJ sc-jrAGrp lidzfX jDiA-Dv'][normalize-space()='Submitted']"
    );
  }

  get submittedDropdown() {
    return $('//div[contains(@id,"option-3")]');
  }

  async verifyNewButtonText(buttonText: string) {
    await waitForDisplayed(this.btnNew);
    await isDisplayed(this.btnNew);
    let newButtonText = await this.btnNew.getText();
    stringComparision(newButtonText, buttonText);
  }

  async verifyApplicationHeaderText(headerText: string) {
    await waitForDisplayed(this.applicationHeadetText);
    let applicationHeaderText = await this.applicationHeadetText.getText();
    stringComparision(applicationHeaderText, headerText);
  }

  async clickLogoutButton() {
    await clickElement(this.toggleMenu);
    await clickElement(this.btnLogout);
  }

  async clickStatusButton() {
    await browser.pause(3000);
    await clickElement(this.btnStatus);
  }

  async selectSubmittedStatus() {
    await waitForDisplayed(this.statusDropdown);
    await clickElement(this.statusDropdown);
    await waitForDisplayed(this.submittedDropdown);
    await clickElement(this.submittedDropdown);
  }

  async clickApplyButton() {
    await clickElement(this.btnApply);
  }

  async clickFirstSubmittedApplication() {
    await waitForClickable(this.submittedApplication);
    await scrollIntoView(this.submittedApplication);
    await clickElement(this.submittedApplication);
  }

  async verifySubmittedText(text: string) {
    await waitForDisplayed(this.submittedText);
    let submittedText = await this.submittedText.getText();
    stringComparision(submittedText, text);
  }
}
export default new ApplicationPages();
