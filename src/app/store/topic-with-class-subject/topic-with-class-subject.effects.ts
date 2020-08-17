import { Actions, Effect, ofType } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { mergeMap, map } from "rxjs/operators";
import { TopicWithClassSubjectService } from "./api/topic-with-class-subject.service";
import {
  TopicWithClassSubjectActionsUnion,
  TopicWithClassSubjectActions,
  FetchedTopicWithClassSubject,
} from "./topic-with-class-subject.actions";
import { Store } from "@ngrx/store";
import { AppState } from "../app.state";

@Injectable()
export class TopicWithClassSubjectEffects {
  constructor(
    private action$: Actions<TopicWithClassSubjectActionsUnion>,
    private topicWithClassSubjectService: TopicWithClassSubjectService,
    private store: Store<AppState>
  ) {}

  @Effect()
  fetchTopicWithClassSubject$ = this.action$.pipe(
    ofType(TopicWithClassSubjectActions.FETCH_TOPIC_WITH_CLASS_SUBJECT),
    map(() => {
      return this.topicWithClassSubjectService.getTopicWithClassSubject();
    }),
    mergeMap((response) => {
      return response.pipe(
        map((res) => {
          const classList = this.store
            .select("classList")
            .subscribe((classList) => {
              return classList;
            });
          const mappingObject = {
            classList: classList,
            topicWithClassSubject: res,
          };
          return new FetchedTopicWithClassSubject(mappingObject);
        })
      );
    })
  );
}
