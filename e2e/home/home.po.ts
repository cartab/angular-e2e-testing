import { browser, by, element } from 'protractor';

export class AngularE2eTestingPage {
  navigateTo() {
    return browser.get('/');
  }

  getBannerTitleText() {
    return element(by.css('#main-banner h1')).getText();
  }

  getBannerText() {
    return element(by.css('#main-banner p')).getText();
  }

  getCoffeeMachine() {
    return element(by.tagName('img'));
  }

  getMenuCount() {
    return element.all(by.css('.coffee-type')).count();
  }

  getMenuItemAt(position) {
    return element.all(by.css('.coffee-type')).get(position).getText();
  }

  placeOrder(position) {
    element.all(by.css('.coffee-type')).get(position).click();
  }

  getStatus() {
    return element(by.css('.well h4')).getText();
  }

  getCancelButton() {
    return element(by.css('.btn-danger'));
  }

  getOrderReadyButton() {
    return element(by.css('.btn-success'));
  }
}
