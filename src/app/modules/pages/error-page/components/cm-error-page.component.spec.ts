import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CmErrorPageComponent} from './cm-error-page.component';

describe('ErrorPageComponent', () => {
  let component: CmErrorPageComponent;
  let fixture: ComponentFixture<CmErrorPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmErrorPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmErrorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
