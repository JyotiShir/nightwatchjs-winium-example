var HtmlReporter = require('nightwatch-html-reporter');
var reporter = new HtmlReporter({
  openBrowser: false,
  relativeScreenshots: true,
  reportsDirectory: __dirname,
  uniqueFilename: false,
  themeName: 'compact',
  hideSuccess: false
});

self = module.exports = {
  // для доступа к глобальным переменным использовать browser.globals
  reporter: reporter.fn,
  waitForConditionTimeout: 600000
};
