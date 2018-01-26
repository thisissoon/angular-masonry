import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getCardCount() {
    return element.all(by.css('sn-root .card')).count();
  }

  getCardStyleAttr() {
    return element.all(by.css('sn-root .card')).first().getAttribute('style');
  }

  getGridStyleAttr() {
    return element(by.css('sn-root .grid')).getAttribute('style');
  }

  isMasonryAppliedToGrid() {
    return this.getGridStyleAttr()
      .then(style =>
        style.includes('position: relative') &&
        style.includes('width:') &&
        style.includes('height:'));
  }

  isMasonryAppliedToCards() {
    return this.getCardStyleAttr()
      .then(style =>
        style.includes('position: absolute') &&
        style.includes('top:') &&
        style.includes('left:'));
  }
}
