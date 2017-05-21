import { AngularE2eTestingPage } from './home.po';
import { browser } from 'protractor';

// List of items in the menu
const menu = ['Espresso', 'Cappuccino', 'Latte', 'Mocha'];

describe('angular-e2e-testing App', () => {
  let page: AngularE2eTestingPage;

  beforeEach(() => {
    page = new AngularE2eTestingPage();
  });

  it('should display banner content correctly', () => {
    page.navigateTo();
    expect(page.getBannerTitleText()).toEqual(`Angular's Coffee Shop`);
    expect(page.getBannerText()).toEqual(`Welcome to Angular's Coffee Shop! It's a beautiful day isn't it?`);
  });

  it('should display coffee machine', () => {
    page.navigateTo();
    expect(page.getCoffeeMachine().isDisplayed).toBeTruthy();
  });

  it('should display all menu items correctly', () => {
    page.navigateTo();

    expect(page.getMenuCount()).toEqual(menu.length);
    menu.map((item, key) => {
      expect(page.getMenuItemAt(key)).toEqual(menu[key]);
    });
  });

  it('should update status correctly when new order is placed', () => {
    // Use this so that protractor doesn't wait for timeout before running assertions
    browser.waitForAngularEnabled(false);

    page.navigateTo();
    page.placeOrder(1);

    expect(page.getStatus()).toEqual(`Brewing you an amazing ${menu[1]}!!`);
    expect(page.getCancelButton().isDisplayed()).toBeTruthy();

    // Reset for other tests
    browser.waitForAngularEnabled(true);
  });

  // Note: In this test, protractor will wait for the timeout to execute before it runs the assertions.
  it('should show order complete 2 seconds after the order has been placed', () => {
    page.navigateTo();
    page.placeOrder(1);

    expect(page.getStatus()).toEqual('Your order is ready!!');
    expect(page.getOrderReadyButton().isDisplayed()).toBeTruthy();
  });
});
