import { Action } from "@ngrx/store";

export enum ClassActions {
  ADD_CLASS = "[Class] Add Class",
  DELETE_CLASS = "[Class] Delete Class",
  EDIT_CLASS = "[Class] Edit Class",
  FETCH_CLASS = "[Class] Fetch Class",
  FETCHED_CLASS = "[Class] Fetched Class",
}

export class AddClass implements Action {
  readonly type = ClassActions.ADD_CLASS;
  constructor(public payload: any) {}
}

export class DeleteClass implements Action {
  readonly type = ClassActions.DELETE_CLASS;
  constructor(public payload: any) {}
}
export class EditClass implements Action {
  readonly type = ClassActions.EDIT_CLASS;
  constructor(public payload: any) {}
}

export class FetchClass implements Action {
  readonly type = ClassActions.FETCH_CLASS;
}

export class FetchedClass implements Action {
  readonly type = ClassActions.FETCHED_CLASS;
  constructor(public payload: any) {}
}

export type ClassActionsUnion =
  | AddClass
  | DeleteClass
  | EditClass
  | FetchClass
  | FetchedClass;
