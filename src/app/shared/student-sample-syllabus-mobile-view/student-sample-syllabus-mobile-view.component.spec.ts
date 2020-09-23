import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentSampleSyllabusMobileViewComponent } from './student-sample-syllabus-mobile-view.component';

describe('StudentSampleSyllabusMobileViewComponent', () => {
  let component: StudentSampleSyllabusMobileViewComponent;
  let fixture: ComponentFixture<StudentSampleSyllabusMobileViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentSampleSyllabusMobileViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentSampleSyllabusMobileViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
