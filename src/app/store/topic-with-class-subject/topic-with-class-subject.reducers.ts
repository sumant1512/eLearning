import { TopicWithClassSubjectListType } from "./types/topic-with-class-subject.type";
import {
  TopicWithClassSubjectActionsUnion,
  TopicWithClassSubjectActions,
} from "./topic-with-class-subject.actions";
import { transformForSyllabus } from "./topic-with-class-subject.transform";

const topicWithClassSubjectList: TopicWithClassSubjectListType[] = [];

export function topicWithClassSubjectReducer(
  state = topicWithClassSubjectList,
  action: TopicWithClassSubjectActionsUnion
): any {
  switch (action.type) {
    case TopicWithClassSubjectActions.FETCHED_TOPIC_WITH_CLASS_SUBJECT:
      // return transformForSyllabus(action.payload);
      return action.payload;
    default:
      return state;
  }
}
