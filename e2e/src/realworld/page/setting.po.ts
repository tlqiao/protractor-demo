import {browser, by, element, ExpectedConditions} from 'protractor';

export class Setting {
  async logout() {
    await browser.wait(ExpectedConditions.visibilityOf(element(by.css('app-settings-page .btn.btn-outline-danger'))), 3000);
    await element(by.css('app-settings-page .btn.btn-outline-danger')).click();
  }
}
