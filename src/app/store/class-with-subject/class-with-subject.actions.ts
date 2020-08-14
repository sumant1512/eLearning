import { Action } from "@ngrx/store";
import { ClassWithSubjectListType } from "./types/class-with-subject.type";

export enum ClassWithSubjectActions {
  FETCH_CLASS_WITH_SUBJECT = "[ClassWithSubject] Fetch ClassWithSubject",
  FETCHED_CLASS_WITH_SUBJECT = "[ClassWithSubject] Fetched ClassWithSubject",
}

export class FetchClassWithSubject implements Action {
  readonly type = ClassWithSubjectActions.FETCH_CLASS_WITH_SUBJECT;
}

export class FetchedClassWithSubject implements Action {
  readonly type = ClassWithSubjectActions.FETCHED_CLASS_WITH_SUBJECT;
  constructor(public payload: ClassWithSubjectListType[]) {}
}

export type ClassWithSubjectActionsUnion =
  | FetchClassWithSubject
  | FetchedClassWithSubject;
