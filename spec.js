describe('get list of element',function(){
    var firstValue = element(by.model('first'));
    var secondValue = element(by.model('second'));
    var oper = element(by.model('operator')).$('[value="MULTIPLICATION"]');
    //var goButton = element(by.id('gobutton'));
    //var goButton = element(by.buttonText('Go!'));
    var goButton = element(by.partialButtonText('Go'));    
    var resultTable = element.all(by.repeater('result in memory'));

    beforeEach(function(){
        browser.get('http://juliemr.github.io/protractor-demo/');
    });

    
    afterEach(function() {
        console.log("End of each test...");
    });
        

    function add(a,b){
        firstValue.sendKeys(a);
        secondValue.sendKeys(b);
        oper.click();
        goButton.click();
    }

    it('check the result table',function(){
        add(1,2);
        add(3,3);
        add(5,5);
        expect(resultTable.count()).toEqual(3);
        expect(browser.getCurrentUrl()).toContain('demo');
    });
});