describe("Learining Protractor",function(){

    it("should be correct page",function(){
        browser.get('http://www.thetestroom.com/jswebapp');
        expect(browser.getCurrentUrl()).toContain('jswebapp');
    });

    it("Should Generate Correct Text..",function(){
        var textMsg = "lokesh text";
        browser.get('http://www.thetestroom.com/jswebapp');
        element(by.model('person.name')).sendKeys(textMsg);
        element(by.binding('person.name')).getText().then(function(text){
            expect(text).toEqual(textMsg);
        });
    });

    it("Should check the correct  number of items in",function(){
        browser.get('http://www.thetestroom.com/jswebapp');
        element(by.buttonText('CONTINUE')).click();
        element(by.model('animal')).$("[value='2']").click();

        element.all(by.css(".ng-pristine option")).then(function(items){
            expect(items.length).toBe(4);
            expect(items[2].getText()).toBe('Simba the Lion');
        });

        element(by.buttonText('CONTINUE')).click();
    });

    it("should check the user is on thank you page..",function(){
        browser.get('http://www.thetestroom.com/jswebapp');
        element(by.buttonText('CONTINUE')).click();
        element(by.buttonText('CONTINUE')).click();
        expect(browser.getCurrentUrl()).toContain('confirm');
    });
});