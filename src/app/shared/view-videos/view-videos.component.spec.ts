import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewVideosComponent } from './view-videos.component';

describe('ViewVideosComponent', () => {
  let component: ViewVideosComponent;
  let fixture: ComponentFixture<ViewVideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewVideosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
