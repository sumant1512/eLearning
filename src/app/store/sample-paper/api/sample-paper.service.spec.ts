import { TestBed } from '@angular/core/testing';

import { SamplePaperService } from './sample-paper.service';

describe('SamplePaperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SamplePaperService = TestBed.get(SamplePaperService);
    expect(service).toBeTruthy();
  });
});
