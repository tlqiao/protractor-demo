const SpecReporter = require('jasmine-spec-reporter').SpecReporter;
const Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
exports.config = {
  specs: [
    './e2e/**/*.e2e-spec.ts'
  ],
  capabilities: {
    'browserName': 'chrome',
    shardTestFiles: true,
    maxInstances: 2,
    chromeOptions: {args: ['--window-size=1920,1080']}
  },
  directConnect: true,
  baseUrl: 'https://angular.io/' ,
  suites: {
    calculate: './e2e/src/calculate/*.e2e-spec.ts',
    publishArticle: './e2e/src/realworld/*.e2e-spec.ts'

  },
   SELENIUM_PROMISE_MANAGER: false,
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 60000
  },
  // bforeLaunch: function() {
  //   require('ts-node').register({
  //     project: 'e2e/tsconfig.e2e.json'
  //   });
  // },

  onPrepare: function() {
    require('ts-node').register({
      project: 'e2e/tsconfig.e2e.json'
    });
    jasmine.getEnv().addReporter(new SpecReporter({spec:{ displayStacktrace: true }}));
    jasmine.getEnv().addReporter(new Jasmine2HtmlReporter ({
      savePath: './reports',
      takeScreenshots: false,
      takeScreenshotsOnlyFailures: true,
      screenshotFolder: 'errorScreenshots'
    }))
  }
};
