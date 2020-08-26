import { TestBed } from '@angular/core/testing';

import { SamplepapertransformService } from './samplepapertransform.service';

describe('SamplepapertransformService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SamplepapertransformService = TestBed.get(SamplepapertransformService);
    expect(service).toBeTruthy();
  });
});
