import { Action } from "@ngrx/store";
import { TopicWithClassSubjectListType } from "./types/topic-with-class-subject.type";

export enum TopicWithClassSubjectActions {
  FETCH_TOPIC_WITH_CLASS_SUBJECT = "[TopicWithClassSubject] Fetch TopicWithClassSubject",
  FETCHED_TOPIC_WITH_CLASS_SUBJECT = "[TopicWithClassSubject] Fetched TopicWithClassSubject",
}

export class FetchTopicWithClassSubject implements Action {
  readonly type = TopicWithClassSubjectActions.FETCH_TOPIC_WITH_CLASS_SUBJECT;
}

export class FetchedTopicWithClassSubject implements Action {
  readonly type = TopicWithClassSubjectActions.FETCHED_TOPIC_WITH_CLASS_SUBJECT;
  constructor(public payload: any) {}
}

export type TopicWithClassSubjectActionsUnion =
  | FetchTopicWithClassSubject
  | FetchedTopicWithClassSubject;
