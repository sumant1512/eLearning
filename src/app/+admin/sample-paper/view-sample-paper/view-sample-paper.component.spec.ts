import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSamplePaperComponent } from './view-sample-paper.component';

describe('ViewSamplePaperComponent', () => {
  let component: ViewSamplePaperComponent;
  let fixture: ComponentFixture<ViewSamplePaperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSamplePaperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSamplePaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
