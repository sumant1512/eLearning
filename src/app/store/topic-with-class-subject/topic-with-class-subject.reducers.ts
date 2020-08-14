import { TopicWithClassSubjectListType } from "./types/topic-with-class-subject.type";
import {
  TopicWithClassSubjectActionsUnion,
  TopicWithClassSubjectActions,
} from "./topic-with-class-subject.actions";

const topicWithClassSubjectList: TopicWithClassSubjectListType[] = [];

export function topicWithClassSubjectReducer(
  state = topicWithClassSubjectList,
  action: TopicWithClassSubjectActionsUnion
): TopicWithClassSubjectListType[] {
  switch (action.type) {
    case TopicWithClassSubjectActions.FETCHED_CLASS_WITH_SUBJECT:
      return action.payload;
    default:
      return state;
  }
}
