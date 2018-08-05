// It will work for headless
exports.config = {
  
  capabilities: {
    'directConnect': true,
    'browserName': 'chrome',
        chromeOptions: {
            args: ["--headless", "--disable-gpu", "--window-size=800x600"]
        }
    },
  framework: 'jasmine',
  specs: ['spec.js'],
    jasmineNodeOpts: {
        defaultTimeoutInterval: 90000
    },
    onPrepare: function () {
        browser.manage().timeouts().implicitlyWait(20000);
    }
};﻿
 

