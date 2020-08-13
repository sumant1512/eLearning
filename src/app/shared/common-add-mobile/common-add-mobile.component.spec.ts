import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonAddMobileComponent } from './common-add-mobile.component';

describe('CommonAddMobileComponent', () => {
  let component: CommonAddMobileComponent;
  let fixture: ComponentFixture<CommonAddMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonAddMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonAddMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
