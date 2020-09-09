import { TestBed } from '@angular/core/testing';

import { StudentTransformService } from './student-transform.service';

describe('StudentTransformService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudentTransformService = TestBed.get(StudentTransformService);
    expect(service).toBeTruthy();
  });
});
