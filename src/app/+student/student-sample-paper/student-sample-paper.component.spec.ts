import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentSamplePaperComponent } from './student-sample-paper.component';

describe('StudentSamplePaperComponent', () => {
  let component: StudentSamplePaperComponent;
  let fixture: ComponentFixture<StudentSamplePaperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentSamplePaperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentSamplePaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
