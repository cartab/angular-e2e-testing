import { AngularE2eTestingPage } from './app.po';

describe('angular-e2e-testing App', () => {
  let page: AngularE2eTestingPage;

  beforeEach(() => {
    page = new AngularE2eTestingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
