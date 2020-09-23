import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesBoardComponent } from './notes-board.component';

describe('NotesBoardComponent', () => {
  let component: NotesBoardComponent;
  let fixture: ComponentFixture<NotesBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotesBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
