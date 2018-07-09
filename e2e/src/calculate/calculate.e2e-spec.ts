import {DemoPage} from './page/calculate.po';

describe('should calculate correctly', async () => {
  let demoPage: DemoPage;
  demoPage = new DemoPage();

  it('should calculate add correctly', async () => {
    await demoPage.navigateHomePage();
    await demoPage.add(1, 2);
    expect(await demoPage.getResult()).toEqual('3');
  });

  it('should calculate reduce correctly', async () => {
    await demoPage.navigateHomePage();
    await demoPage.reduce(3, 2);
    expect(await demoPage.getResult()).toEqual('1');
  });

  it('should calculate multiply correctly', async () => {
    await demoPage.navigateHomePage();
    await demoPage.multiply(3, 2);
    expect(await demoPage.getResult()).toEqual('6');
  });

  it('should calculate division correctly', async () => {
    await demoPage.navigateHomePage();
    await demoPage.division(6, 2);
    expect(await demoPage.getResult()).toEqual('3');
  });
});
