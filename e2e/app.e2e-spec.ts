import { Meanapp1Page } from './app.po';

describe('meanapp1 App', () => {
  let page: Meanapp1Page;

  beforeEach(() => {
    page = new Meanapp1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
