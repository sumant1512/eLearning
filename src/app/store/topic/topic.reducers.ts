import { TopicActions, TopicActionsUnion } from "./topic.actions";
import { TopicListType } from "./types/topic.type"

const topicList: TopicListType[] =[];

export function topicReducer(
  state = topicList,
  action: TopicActionsUnion
): TopicListType[] {
  switch (action.type) {
    case TopicActions.FETCHED_TOPIC:
      return action.payload;
    default:
      return state;
  }
}

  