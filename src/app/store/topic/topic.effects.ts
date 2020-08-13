import { Actions, Effect, ofType } from "@ngrx/effects";
import { TopicService } from "./api/topic.service";
import { Injectable } from "@angular/core";
import {
  TopicActionsUnion,
  TopicActions,
  FetchTopic,
  FetchedTopic,
} from "./topic.actions";
import { mergeMap, map } from "rxjs/operators";

@Injectable()
export class TopicEffects {
  constructor(
    private action$: Actions<TopicActionsUnion>,
    private topicService: TopicService
  ) {}

  @Effect()
  addTopic$ = this.action$.pipe(
    ofType(TopicActions.ADD_TOPIC),
    map((action) => {
      return this.topicService.addTopic(action.payload);
    }),
    mergeMap((response) => {
      return response.pipe(
        map(() => {
          return new FetchTopic();
        })
      );
    })
  );

  @Effect()
  deleteTopic$ = this.action$.pipe(
    ofType(TopicActions.DELETE_TOPIC),
    map((action) => {
      return this.topicService.removeTopic(action.payload);
    }),
    mergeMap((response) => {
      return response.pipe(
        map(() => {
          return new FetchTopic();
        })
      );
    })
  );

  @Effect()
  editTopic$ = this.action$.pipe(
    ofType(TopicActions.EDIT_TOPIC),
    map((action) => {
      return this.topicService.editTopicName(action.payload);
    }),
    mergeMap((response) => {
      return response.pipe(
        map(() => {
          return new FetchTopic();
        })
      );
    })
  );

  @Effect()
  fetchTopices$ = this.action$.pipe(
    ofType(TopicActions.FETCH_TOPIC),
    map(() => {
      return this.topicService.getAllTopics();
    }),
    mergeMap((response) => {
      return response.pipe(
        map((res) => {
          return new FetchedTopic(res);
        })
      );
    })
  );
}
