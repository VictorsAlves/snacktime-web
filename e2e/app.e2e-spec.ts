import { AngularCliBible } from './app.po';

describe('pk2-angular-cli-free App', () => {
  let page: AngularCliBible;

  beforeEach(() => {
    page = new AngularCliBible();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
