import { TestBed } from '@angular/core/testing';

import { TopicWithClassSubjectService } from './topic-with-class-subject.service';

describe('TopicWithClassSubjectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TopicWithClassSubjectService = TestBed.get(TopicWithClassSubjectService);
    expect(service).toBeTruthy();
  });
});
