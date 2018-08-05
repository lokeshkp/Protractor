describe('Enter name Feature',function(){
    it('should enter name as Lokesh', function(){
        
        // Launching Browser
        browser.get('https://angularjs.org/')
        
        // finding element by ng model and sending text value
        element(by.model('yourName')).sendKeys('Lokesh');
        
        // wait method
        browser.waitForAngular();
        // finding element by xpath 
        var text= element(by.xpath("//h1[@class='ng-binding']"));
        
        // Assertion
        expect(text.getText()).toEqual('Hello Lokesh!');
    });
});

describe('free free crm title test',function(){
    it('get title test',function(){
        browser.get('http://juliemr.github.io/protractor-demo');
        expect(browser.getTitle()).toEqual('Super Calculator');
        browser.driver.sleep(2000);
        element(by.model('first')).sendKeys('Selenium');
    })
});

describe('multiple elments', function(){

    it('should add one and two', function(){
        browser.get('http://juliemr.github.io/protractor-demo/');
        element(by.model('first')).sendKeys(1);
        element(by.model('second')).sendKeys(2);
        element(by.id('gobutton')).click();
        browser.driver.sleep(3000);
        expect(element(by.className('ng-binding')).getText()).toEqual('3');

    });
});