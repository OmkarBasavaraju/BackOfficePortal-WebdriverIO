import { ChainablePromiseElement } from "webdriverio";
import reporter from "./reporter";

export const stringComparision = async (actual: string, expected: string) => {
  expect(actual).toEqual(expected);
  reporter.logStep(`Comparing the two string '${actual}' with '${expected}'`);
};

export const waitForClickable = async (
  element: ChainablePromiseElement<Promise<WebdriverIO.Element>>
) => {
  await element.waitForClickable();
};

export const waitForDisplayed = async (
  element: ChainablePromiseElement<Promise<WebdriverIO.Element>>
) => {
  await element.waitForDisplayed();
};

export const isDisplayed = async (
  element: ChainablePromiseElement<Promise<WebdriverIO.Element>>
) => {
  await element.isDisplayed();
};
