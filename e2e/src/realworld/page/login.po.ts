import {browser, by, element} from 'protractor';
import {Menu} from './menu.po';

export class Login {
  private menu = new Menu();
  async navigateConduit() {
    await browser.get('https://angular.realworld.io');
    return this;
  }
  async navigateBaidu() {
    await browser.get('http://www.baidu.com');
    return this;
  }

  async login(userName, password) {
    await this.menu.navigateToSignIn();
    await this.fillUserName(userName);
    await this.fillPassword(password);
    await this.clickSignIn();
  }

  async fillUserName(userName) {
    await element(by.css('app-auth-page form input[formcontrolname="email"]')).clear();
    await element(by.css('app-auth-page form input[formcontrolname="email"]')).sendKeys(userName);
    return this;
  }

  async fillPassword(password) {
    await element(by.css('app-auth-page form input[formcontrolname="password"]')).clear();
    await element(by.css('app-auth-page form input[formcontrolname="password"]')).sendKeys(password);
    return this;
  }

  async clickSignIn() {
    await element(by.css('app-auth-page button[type="submit"]')).click();
    return this;
  }

}

