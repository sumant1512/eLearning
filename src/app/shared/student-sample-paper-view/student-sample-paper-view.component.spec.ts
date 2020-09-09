import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentSamplePaperViewComponent } from './student-sample-paper-view.component';

describe('StudentSamplePaperViewComponent', () => {
  let component: StudentSamplePaperViewComponent;
  let fixture: ComponentFixture<StudentSamplePaperViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentSamplePaperViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentSamplePaperViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
