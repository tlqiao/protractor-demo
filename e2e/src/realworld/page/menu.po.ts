import {by, element} from 'protractor';

export class Menu {
  async clickMenu(menu) {
    await element.all(by.css('app-layout-header ul li a'))
      .filter(item => item.getText().then (text => text.indexOf(menu) !== -1))
      .first()
      .click();
    return this;
  }

  async navigateToHome() {
    await this.clickMenu('Home');

  }

  async navigateToNewArticle() {
    await this.clickMenu('New Article');
  }

  async navigateToSetting() {
    await this.clickMenu('Setting');
  }

  async navigateToProfile(userName) {
    await this.clickMenu(userName);
  }

  async navigateToSignIn() {
    await this.clickMenu('Sign in');
  }
}
