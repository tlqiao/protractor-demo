import {browser, by, element, ExpectedConditions} from 'protractor';

export class NewArticle {
  async fillArticleTitle(title) {
    await browser.wait(ExpectedConditions.visibilityOf(element(by.css('app-editor-page form'))), 3000);
    await element(by.css('app-editor-page input[formcontrolname="title"]')).clear();
    await element(by.css('app-editor-page input[formcontrolname="title"]')).sendKeys(title);
    return this;
  }

  async fillArticleDescription(description) {
    await element(by.css('app-editor-page input[formcontrolname="description"]')).clear();
    await element(by.css('app-editor-page input[formcontrolname="description"]')).sendKeys(description);
    return this;
  }

  async fillArticleContent(content) {
    await element(by.css('app-editor-page textarea[formcontrolname="body"]')).clear();
    await element(by.css('app-editor-page textarea[formcontrolname="body"]')).sendKeys(content);
    return this;
  }

  async clickPublishArticleButton() {
    await browser.sleep(1000);
    await element.all(by.css('app-editor-page button'))
      .filter(item => item.getText()
        .then (text => text.indexOf('Publish Article') !== -1))
      .first()
      .click();
    return this;
  }

  async getArticleTitle() {
    await browser.wait(ExpectedConditions.visibilityOf(element(by.css('app-article-page'))), 3000);
    return await element(by.css('app-article-page h1')).getText();
  }


}
