import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentSyllabusViewComponent } from './student-syllabus-view.component';

describe('StudentSyllabusViewComponent', () => {
  let component: StudentSyllabusViewComponent;
  let fixture: ComponentFixture<StudentSyllabusViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentSyllabusViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentSyllabusViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
