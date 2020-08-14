import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSaplePaperComponent } from './view-saple-paper.component';

describe('ViewSaplePaperComponent', () => {
  let component: ViewSaplePaperComponent;
  let fixture: ComponentFixture<ViewSaplePaperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSaplePaperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSaplePaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
