import {NewArticle} from './page/new-article.po';
import {Login} from './page/login.po';
import {Menu} from './page/menu.po';
import {Setting} from './page/setting.po';
describe('should publish new article successfully', async () => {
  let login: Login;
  let menu: Menu;
  let newArticle: NewArticle;
  let setting: Setting;
  login = new Login();
  menu = new Menu();
  newArticle = new NewArticle();
  setting = new Setting();

  it('should publish new article successfully', async () => {
    // given
    await login.navigateConduit();
    await login.login('tlqiao@thoughtworks.com', 'qtl1986926');
    // when
    await menu.navigateToNewArticle();
    await newArticle.fillArticleTitle('demoTitle');
    await newArticle.fillArticleContent('demoContent');
    await newArticle.fillArticleDescription('demoDescription');
    await newArticle.clickPublishArticleButton();
    // then
    expect(await newArticle.getArticleTitle()).toEqual('demoTitle');
    // tear down
    afterEach(async () => {
      await menu.navigateToSetting();
      await setting.logout();
    });
  });
});
