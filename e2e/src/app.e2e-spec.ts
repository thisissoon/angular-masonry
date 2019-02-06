import { AppPage } from './app.po';

describe('angular-masonry App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('should contain cards', () => {
    page.navigateTo();
    expect(page.getCardCount()).toEqual(10);
  });

  it('should have applied masonry styles to grid', () => {
    expect(page.isMasonryAppliedToGrid()).toBeTruthy();
  });

  it('should have applied masonry styles to card', () => {
    expect(page.isMasonryAppliedToCards()).toBeTruthy();
  });
});
