import allure from "@wdio/allure-reporter";

class Reporter {
  logStep(log: string) {
    allure.addStep(log);
  }
}
export default new Reporter();
