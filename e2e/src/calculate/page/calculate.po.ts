import {browser, by, element} from 'protractor';

export class DemoPage {
  async navigateHomePage() {
    await browser.get('http://juliemr.github.io/protractor-demo/');
    return this;
  }

  async add(a, b) {
    await this.inputFirstValue(a);
    await element(by.css('select option[value="ADDITION"]')).click();
    await this.inputSecondValue(b);
    await this.clickGoButton();
  }

  async reduce(a, b) {
    await this.inputFirstValue(a);
    await element(by.css('select option[value="SUBTRACTION"]')).click();
    await this.inputSecondValue(b);
    await this.clickGoButton();
  }

  async multiply(a, b) {
    await this.inputFirstValue(a);
    await element(by.css('select option[value="MULTIPLICATION"]')).click();
    await this.inputSecondValue(b);
    await this.clickGoButton();
  }

  async division(a, b) {
    await this.inputFirstValue(a);
    await element(by.css('select option[value="DIVISION"]')).click();
    await this.inputSecondValue(b);
    await this.clickGoButton();
  }

  async inputFirstValue(a) {
    // await element(by.css('form input[ng-model="first"]')).clear();
    // await element(by.css('form input[ng-model="first"]')).sendKeys(a);
    await element(by.model('first')).clear();
    await element(by.model('first')).sendKeys(a);
    return this;
  }

  async inputSecondValue(b) {
    await element(by.css('form input[ng-model="second"]')).clear();
    await element(by.css('form input[ng-model="second"]')).sendKeys(b);
    return this;
  }

  async clickGoButton() {
    await element(by.id('gobutton')).click();
    return this;
  }

  async getResult() {
    browser.sleep(3000);
    return await element(by.css('h2')).getText();
  }
}
