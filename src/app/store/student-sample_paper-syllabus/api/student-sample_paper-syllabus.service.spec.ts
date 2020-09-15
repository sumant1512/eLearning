import { TestBed } from '@angular/core/testing';

import { StudentSamplePaperSyllabusService } from './student-sample_paper-syllabus.service';

describe('StudentSamplePaperSyllabusService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudentSamplePaperSyllabusService = TestBed.get(StudentSamplePaperSyllabusService);
    expect(service).toBeTruthy();
  });
});
