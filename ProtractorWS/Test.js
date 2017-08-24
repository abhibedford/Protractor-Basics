describe('Google Search Page', function () {
  it('should search for protractor', function () {
    browser.waitForAngularEnabled(false);
    browser.get('www.google.com');
    
    element(by.id('lst-ib')).sendKeys('Protractor Testing');
    element(by.name('btnK')).click();

    browser.waitForAngularEnabled(true);

  })
} )