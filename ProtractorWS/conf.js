exports.config = {
  seleniumServerJar: './selenium/selenium-server-standalone-3.5.2.jar',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  chromeDriver: './selenium/chromedriver',
  capabilities: {
    'browserName': 'chrome',
    'proxy': {
      'proxyType': 'manual',
      'httpProxy': 'http://<username>:<password>@<host>:<port>'
    }
  },
  specs: ['Test.js']
};