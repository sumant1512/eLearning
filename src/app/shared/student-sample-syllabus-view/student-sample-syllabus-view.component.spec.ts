import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentSampleSyllabusViewComponent } from './student-sample-syllabus-view.component';

describe('StudentSampleSyllabusViewComponent', () => {
  let component: StudentSampleSyllabusViewComponent;
  let fixture: ComponentFixture<StudentSampleSyllabusViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentSampleSyllabusViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentSampleSyllabusViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
