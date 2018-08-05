describe('multiple test scenarios', function(){
    var firstValue = element(by.model('first'))
    var secondValue = element(by.model('second'))
    var goButton = element(by.id('gobutton'))
    var result = element(by.className('ng-binding')).getText()

    beforeEach(function(){
        browser.get('http://juliemr.github.io/protractor-demo/');
    })

    // TestCase1
    it('should have a title',function(){
        expect(browser.getTitle()).toEqual('Super Calculator');
    })

    // TestCase2
    it('should add "5" plus "5"',function(){
        firstValue.sendKeys(5);
        secondValue.sendKeys(5);      
        goButton.click();
        browser.driver.sleep(3000);
        expect(result.getText()).toEqual('10');
    })
})