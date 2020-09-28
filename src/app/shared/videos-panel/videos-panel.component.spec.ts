import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosPanelComponent } from './videos-panel.component';

describe('VideosPanelComponent', () => {
  let component: VideosPanelComponent;
  let fixture: ComponentFixture<VideosPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideosPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideosPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
