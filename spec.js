describe('get list of element',function(){
    var firstValue = element(by.model('first'));
    var secondValue = element(by.model('second'));
    var goButton = element(by.id('gobutton'));
    //var result = element(by.className('ng-binding')).getText();
    var resultTable = element.all(by.repeater('result in memory'));

    beforeEach(function(){
        browser.get('http://juliemr.github.io/protractor-demo/');
    });

    function add(a,b){
        firstValue.sendKeys(a);
        secondValue.sendKeys(b);
        goButton.click();
    }

    it('check the result table',function(){
        add(1,2);
        add(3,3);
        add(5,5);
        expect(resultTable.count()).toEqual(3);
    });
});