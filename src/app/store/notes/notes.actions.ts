import { Action } from "@ngrx/store";

export enum NotesActions {
  ADD_NOTES = "[Notes] Add Notes",
  DELETE_NOTES = "[Notes] Delete Notes",
  EDIT_NOTES = "[Notes] Edit Notes",
  FETCH_NOTES = "[Notes] Fetch Notes",
  FETCHED_NOTES = "[Notes] Fetched Notes",
}

export class AddNotes implements Action {
  readonly type = NotesActions.ADD_NOTES;
  constructor(public payload: any) {}
}

export class DeleteNotes implements Action {
  readonly type = NotesActions.DELETE_NOTES;
  constructor(public payload: any) {}
}
export class EditNotes implements Action {
  readonly type = NotesActions.EDIT_NOTES;
  constructor(public payload: any) {}
}

export class FetchNotes implements Action {
  readonly type = NotesActions.FETCH_NOTES;
}

export class FetchedNotes implements Action {
  readonly type = NotesActions.FETCHED_NOTES;
  constructor(public payload: any[]) {}
}

export type NotesActionsUnion =
  | AddNotes
  | DeleteNotes
  | EditNotes
  | FetchNotes
  | FetchedNotes;
