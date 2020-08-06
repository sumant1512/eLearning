import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolVerificationComponent } from './school-verification.component';

describe('SchoolVerificationComponent', () => {
  let component: SchoolVerificationComponent;
  let fixture: ComponentFixture<SchoolVerificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolVerificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
