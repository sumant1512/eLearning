import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConferencingComponent } from './conferencing.component';

describe('ConferencingComponent', () => {
  let component: ConferencingComponent;
  let fixture: ComponentFixture<ConferencingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConferencingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConferencingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
