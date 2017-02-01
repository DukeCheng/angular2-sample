import { TestBed,async } from '@angular/core/testing';
import { AppComponent } from './app.component';
describe('App', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({ declarations: [AppComponent] }).compileComponents();
  }));
  
  it("true is true", () => expect(true).toBe(true));

  it('should work', () => {
    let fixture = TestBed.createComponent(AppComponent);
    expect(fixture.componentInstance instanceof AppComponent).toBe(true, 'should create AppComponent');
  });
});

describe('1st tests', () => {
  it('true is true', () => expect(true).toBe(true));
});