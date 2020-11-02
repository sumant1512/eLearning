import { Action } from "@ngrx/store";

export enum TeacherActions {
  ADD_TEACHER = "[Teacher] Add Teacher",
  DELETE_TEACHER = "[Teacher] Delete Teacher",
  FETCH_TEACHER = "[Teacher] Fetch Teacher",
  FETCHED_TEACHER = "[Teacher] Fetched Teacher",
  TAG_SUBJECT_TO_TEACHER = "[Teacher] Tag Subject To Teacher",
  FETCH_TAGGED_SUBJECT_TO_TEACHER = "[Teacher] Fetch Tagged Subject To Teacher",
  FETCHED_TAGGGED_SUBJECT_TO_TEACHER = "[Teacher] Fetched Tagged Subject To Teacher",
}

export class AddTeacher implements Action {
  readonly type = TeacherActions.ADD_TEACHER;
  constructor(public payload: any) {}
}

export class DeleteTeacher implements Action {
  readonly type = TeacherActions.DELETE_TEACHER;
  constructor(public payload: any) {}
}

export class FetchTeacher implements Action {
  readonly type = TeacherActions.FETCH_TEACHER;
}

export class FetchedTeacher implements Action {
  readonly type = TeacherActions.FETCHED_TEACHER;
  constructor(public payload: any) {}
}

export class FetchTaggedSubjectToTeacher implements Action {
  readonly type = TeacherActions.FETCH_TAGGED_SUBJECT_TO_TEACHER;
}

export class FetchedTaggedSubjectToTeacher implements Action {
  readonly type = TeacherActions.FETCHED_TAGGGED_SUBJECT_TO_TEACHER;
  constructor(public payload: any) {}
}

export class TagSubjectToTeacher implements Action {
  readonly type = TeacherActions.TAG_SUBJECT_TO_TEACHER;
  constructor(public payload: any) {}
}

export type TeacherActionsUnion =
  | AddTeacher
  | DeleteTeacher
  | FetchTeacher
  | FetchedTeacher
  | FetchTaggedSubjectToTeacher
  | FetchedTaggedSubjectToTeacher
  | TagSubjectToTeacher;
