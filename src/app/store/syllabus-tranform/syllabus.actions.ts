import { Action } from "@ngrx/store";

export enum SyllabusActions {
  FETCH_SYLLABUS = "[Syllabus] Fetch Syllabus",
  FETCHED_SYLLABUS = "[Syllabus] Fetched Syllabus",
}


export class FetchSyllabus implements Action {
  readonly type = SyllabusActions.FETCH_SYLLABUS;
}

export class FetchedSyllabus implements Action {
  readonly type = SyllabusActions.FETCHED_SYLLABUS;
  constructor(public payload) {}  
}

export type SyllabusActionsUnion =
  | FetchSyllabus
  | FetchedSyllabus;
