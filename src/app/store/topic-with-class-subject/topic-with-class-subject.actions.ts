import { Action } from "@ngrx/store";
import { TopicWithClassSubjectListType } from "./types/topic-with-class-subject.type";

export enum TopicWithClassSubjectActions {
  FETCH_CLASS_WITH_SUBJECT = "[TopicWithClassSubject] Fetch TopicWithClassSubject",
  FETCHED_CLASS_WITH_SUBJECT = "[TopicWithClassSubject] Fetched TopicWithClassSubject",
}

export class FetchTopicWithClassSubject implements Action {
  readonly type = TopicWithClassSubjectActions.FETCH_CLASS_WITH_SUBJECT;
}

export class FetchedTopicWithClassSubject implements Action {
  readonly type = TopicWithClassSubjectActions.FETCHED_CLASS_WITH_SUBJECT;
  constructor(public payload: TopicWithClassSubjectListType[]) {}
}

export type TopicWithClassSubjectActionsUnion =
  | FetchTopicWithClassSubject
  | FetchedTopicWithClassSubject;
