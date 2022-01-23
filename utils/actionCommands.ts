import { ChainablePromiseElement } from "webdriverio";
import reporter from "./reporter";

export const clickElement = async (
  element: ChainablePromiseElement<Promise<WebdriverIO.Element>>
) => {
  await element.click();
  reporter.logStep(`Clicked the element: '${await element.selector}'`);
};

export const setValue = async (
  element: ChainablePromiseElement<Promise<WebdriverIO.Element>>,
  value: string | number
) => {
  await element.setValue(value);
  reporter.logStep(`Enter the value:'${value}'`);
};

export const scrollIntoView = async (
  element: ChainablePromiseElement<Promise<WebdriverIO.Element>>
) => {
  await element.scrollIntoView();
};
