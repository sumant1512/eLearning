import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddClassMobileComponent } from './add-class-mobile.component';

describe('AddClassMobileComponent', () => {
  let component: AddClassMobileComponent;
  let fixture: ComponentFixture<AddClassMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddClassMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddClassMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
