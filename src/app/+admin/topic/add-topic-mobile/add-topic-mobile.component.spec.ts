import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTopicMobileComponent } from './add-topic-mobile.component';

describe('AddTopicMobileComponent', () => {
  let component: AddTopicMobileComponent;
  let fixture: ComponentFixture<AddTopicMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTopicMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTopicMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
