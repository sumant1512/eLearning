import { Actions, Effect, ofType } from "@ngrx/effects";
import { NotesService } from "./api/notes.service";
import { Injectable } from "@angular/core";
import {
  NotesActionsUnion,
  NotesActions,
  FetchNotes,
  FetchedNotes,
} from "./notes.actions";
import { mergeMap, map } from "rxjs/operators";

@Injectable()
export class NotesEffects {
  constructor(
    private action$: Actions<NotesActionsUnion>,
    private notesService: NotesService
  ) {}

  @Effect()
  addNotes$ = this.action$.pipe(
    ofType(NotesActions.ADD_NOTES),
    map((action) => {
      return this.notesService.addNotes(action.payload);
    }),
    mergeMap((response) => {
      return response.pipe(
        map(() => {
          return new FetchNotes();
        })
      );
    })
  );

  @Effect()
  deleteNotes$ = this.action$.pipe(
    ofType(NotesActions.DELETE_NOTES),
    map((action) => {
      return this.notesService.removeNotes(action.payload);
    }),
    mergeMap((response) => {
      return response.pipe(
        map(() => {
          return new FetchNotes();
        })
      );
    })
  );

  @Effect()
  editNotes$ = this.action$.pipe(
    ofType(NotesActions.EDIT_NOTES),
    map((action) => {
      return this.notesService.editNotesName(action.payload);
    }),
    mergeMap((response) => {
      return response.pipe(
        map(() => {
          return new FetchNotes();
        })
      );
    })
  );

  @Effect()
  fetchNotes$ = this.action$.pipe(
    ofType(NotesActions.FETCH_NOTES),
    map(() => {
      return this.notesService.getNotes();
    }),
    mergeMap((response) => {
      return response.pipe(
        map((res) => {
          return new FetchedNotes(res);
        })
      );
    })
  );
}
