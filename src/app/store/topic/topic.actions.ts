import { Action } from "@ngrx/store";
import { TopicListType } from "./types/topic.type";
export enum TopicActions {
    ADD_TOPIC = "[Topic] Add Topic",
    DELETE_TOPIC = "[Topic] Delete Topic",
    EDIT_TOPIC="[Topic] Edit Topic",
    FETCH_TOPIC="[Topic] Fetch Topic",
    FETCHED_TOPIC = "[Topic] Fetched Topic ",
  }

  export class AddTopic implements Action {
    readonly type = TopicActions.ADD_TOPIC;
    constructor(public payload: any) {}
  }
  
  export class DeleteTopic implements Action {
    readonly type = TopicActions.DELETE_TOPIC;
    constructor(public payload: any) {}
  }
  
  export class EditTopic implements Action {
    readonly type = TopicActions.EDIT_TOPIC;
    constructor(public payload: any) {}
  }
  export class FetchTopic implements Action {
    readonly type = TopicActions.FETCH_TOPIC;
  }
  
  export class FetchedTopic implements Action {
    readonly type = TopicActions.FETCHED_TOPIC;
    constructor(public payload: TopicListType[]) {}
  }

export type TopicActionsUnion =
| AddTopic
| DeleteTopic
| EditTopic
| FetchTopic
| FetchedTopic;