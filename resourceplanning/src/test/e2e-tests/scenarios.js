'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('app', function() {


  it('should automatically redirect to /#home when location hash/fragment is empty', function() {
    browser.get('index.html');
    //console.log('location after index.html:'+browser.getLocationAbsUrl().);
    expect(browser.getLocationAbsUrl()).toMatch("/home");
  });


  describe('home view', function() {

    beforeEach(function() {
      browser.get('index.html');
    });


    it('should render home when user navigates to index.html', function() {
      /*
      var el = element.all(by.id('ui-view'));
      el.getText().then(function(text) {
        console.log('Text=\n'+text);
      });
      */
      expect(element.all(by.binding('appTitle')).getText()).
        toMatch("Licensing system prototype"  );
    });

  });
  /*

  describe('view2', function() {

    beforeEach(function() {
      browser.get('index.html#/view2');
    });


    it('should render view2 when user navigates to /view2', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });
  */
});
