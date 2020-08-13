import { Action } from "@ngrx/store";
import { SubjectListType } from "./types/subject.type";

export enum SubjectActions {
  ADD_SUBJECT = "[Subject] Add Subject",
  DELETE_SUBJECT = "[Subject] Delete Subject",
  ASSIGN_SUBJECT = "[Subject] Assign Subject",
  FETCH_UNASSIGNED_CLASSES = "[Subject] Fetch UnAssigned Classes",
  FETCHED_UNASSIGNED_CLASSES = "[Subject] Fetched UnAssigned Classes",
  FETCH_SUBJECT = "[Subject] Fetch Subject",
  FETCHED_SUBJECT = "[Subject] Fetched Subject",
}

export class AddSubject implements Action {
  readonly type = SubjectActions.ADD_SUBJECT;
  constructor(public payload: any) {}
}

export class DeleteSubject implements Action {
  readonly type = SubjectActions.DELETE_SUBJECT;
  constructor(public payload: any) {}
}
export class AssignSubject implements Action {
  readonly type = SubjectActions.ASSIGN_SUBJECT;
  constructor(public payload: any) {}
}

export class FetchSubject implements Action {
  readonly type = SubjectActions.FETCH_SUBJECT;
}

export class FetchedSubject implements Action {
  readonly type = SubjectActions.FETCHED_SUBJECT;
  constructor(public payload: SubjectListType[]) {}
}
export class FetchUnAssignedClass implements Action {
  readonly type = SubjectActions.FETCH_UNASSIGNED_CLASSES;
  constructor(public payload: any) {}
}

export class FetchedUnAssignedClass implements Action {
  readonly type = SubjectActions.FETCHED_UNASSIGNED_CLASSES;
  constructor(public payload: any) {}
}

export type SubjectActionsUnion =
  | AddSubject
  | DeleteSubject
  | AssignSubject
  | FetchSubject
  | FetchedSubject
  | FetchUnAssignedClass
  | FetchedUnAssignedClass;
