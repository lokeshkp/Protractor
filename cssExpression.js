describe("Testing by using CSS expression",function(){

    beforeEach(function(){
        browser.get("http://www.thetestroom.com/jswebapp/index.html");
    });

    afterEach(function(){
        console.log("End of Test..")
    })

    xit("should test by using CSS expressions",function(){
        // CSS TAG
        element(by.css('input')).sendKeys("OmeSairama..");

        // CSS Class
        element(by.css('.ng-binding')).getText().then(function(text){
            console.log(text);
        });

        // CSS ID
        element(by.css('#continue_button')).click();

        // CSS Chaining
        element(by.css('button#continue_button')).click();

        // Child  nodes
        element(by.css('table td a')).getText().then(function(text){
            console.log(text);
        });

        //  Attibutes
        element(by.css('[id="title"]')).getText().then(function(text){
            console.log(text);
        });
    });

    // To import another js file 
    var home_page = require('C:/Users/lokes/Protractor_Workspace/page_object_model/home_page.js')

    it("should be able to call page objects",function(){
        var val = 'Ome Sairama';
        home_page.enterFieldValue(val);
        var homePageText =home_page.getDynamicText();
        expect(homePageText).toBe(val);
        var animal_page = home_page.clickButton();

        animal_page.selectAnimal(2);
        var confirm_page = animal_page.clickContinue();
        expect(confirm_page.getTitle()).toBe('Thank you');
    });
});