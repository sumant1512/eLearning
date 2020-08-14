import { Actions, Effect, ofType } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { mergeMap, map } from "rxjs/operators";
import { TopicWithClassSubjectService } from "./api/topic-with-class-subject.service";
import {
  TopicWithClassSubjectActionsUnion,
  TopicWithClassSubjectActions,
  FetchedTopicWithClassSubject,
} from "./topic-with-class-subject.actions";

@Injectable()
export class TopicWithClassSubjectEffects {
  constructor(
    private action$: Actions<TopicWithClassSubjectActionsUnion>,
    private topicWithClassSubjectService: TopicWithClassSubjectService
  ) {}

  @Effect()
  fetchTopicWithClassSubject$ = this.action$.pipe(
    ofType(TopicWithClassSubjectActions.FETCH_CLASS_WITH_SUBJECT),
    map(() => {
      return this.topicWithClassSubjectService.getTopicWithClassSubject();
    }),
    mergeMap((response) => {
      return response.pipe(
        map((res) => {
          return new FetchedTopicWithClassSubject(res);
        })
      );
    })
  );
}
