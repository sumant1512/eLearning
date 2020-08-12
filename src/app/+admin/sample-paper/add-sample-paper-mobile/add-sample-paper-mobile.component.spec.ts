import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSamplePaperMobileComponent } from './add-sample-paper-mobile.component';

describe('AddSamplePaperMobileComponent', () => {
  let component: AddSamplePaperMobileComponent;
  let fixture: ComponentFixture<AddSamplePaperMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSamplePaperMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSamplePaperMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
