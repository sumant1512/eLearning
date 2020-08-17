import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonSampleSyllabusComponent } from './common-sample-syllabus.component';

describe('CommonSampleSyllabusComponent', () => {
  let component: CommonSampleSyllabusComponent;
  let fixture: ComponentFixture<CommonSampleSyllabusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonSampleSyllabusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonSampleSyllabusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
