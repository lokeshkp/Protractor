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


};