var HtmlReporter = require('protractor-beautiful-reporter');

exports.config={
    framework:'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub/',
    specs:['cssExpression.js'] ,
       
    // The bellow section is for run multiple browser
   /* multiCapabilities:[{
        browserName:'firefox',
    },        
    {
        browserName:'chrome'
    }]*/

    onPrepare: function() {
        // Add a screenshot reporter and store screenshots to `/tmp/screenshots`:
        jasmine.getEnv().addReporter(new HtmlReporter({
           baseDirectory: 'JasmineReports/screenshots'
        }).getJasmine2Reporter());
     }

};