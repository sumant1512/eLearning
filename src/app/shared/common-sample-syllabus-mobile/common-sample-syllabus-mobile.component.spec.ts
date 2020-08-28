import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonSampleSyllabusMobileComponent } from './common-sample-syllabus-mobile.component';

describe('CommonSampleSyllabusMobileComponent', () => {
  let component: CommonSampleSyllabusMobileComponent;
  let fixture: ComponentFixture<CommonSampleSyllabusMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonSampleSyllabusMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonSampleSyllabusMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
