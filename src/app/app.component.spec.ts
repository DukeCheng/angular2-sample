import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
/*describe('App', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ declarations: [AppComponent]});
  });
  it ('should work', () => {
    let fixture = TestBed.createComponent(AppComponent);
    expect(fixture.componentInstance instanceof AppComponent).toBe(true, 'should create AppComponent');
  });
});*/

describe('1st tests', () => {
  it('true is true', () => expect(true).toBe(true));
});

/*System.import('angular2/src/platform/browser/browser_adapter')
  .then(function (browser_adapter) {
    browser_adapter.BrowserDomAdapter.makeCurrent();
  })

Promise.all([
    System.import('angular2/testing'),
    System.import('angular2/platform/testing/browser')
  ])
  .then(function (modules) {
    var testing = modules[0];
    var browser = modules[1];
    testing.setBaseTestProviders(browser.TEST_BROWSER_PLATFORM_PROVIDERS, browser.TEST_BROWSER_APPLICATION_PROVIDERS);
  })
*/