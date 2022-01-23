import { clickElement, setValue } from "../../utils/actionCommands";

class LoginPage {
  get inputUsername() {
    return $("#inputId-1");
  }

  get inputPassword() {
    return $("#password");
  }

  get btnSignIn() {
    return $("#auth_login_form_button");
  }

  open(pageUrl: string) {
    return browser.url(pageUrl);
  }

  async login(username: string, password: string) {
    await setValue(this.inputUsername, username);
    await setValue(this.inputPassword, password);
    await clickElement(this.btnSignIn);
  }
}
export default new LoginPage();
