import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSubjectMobileComponent } from './add-subject-mobile.component';

describe('AddSubjectMobileComponent', () => {
  let component: AddSubjectMobileComponent;
  let fixture: ComponentFixture<AddSubjectMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSubjectMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSubjectMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
