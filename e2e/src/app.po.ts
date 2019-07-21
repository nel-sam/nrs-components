import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText(): Promise<string> {
    return Promise.resolve('NRS Components');
  }
}
