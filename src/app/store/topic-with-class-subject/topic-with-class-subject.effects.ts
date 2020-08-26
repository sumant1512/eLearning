import { Actions, Effect, ofType } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { mergeMap, map } from "rxjs/operators";
import { TopicWithClassSubjectService } from "./api/topic-with-class-subject.service";
import * as ClassActions from "../../store/class/class.actions";
import * as ClassWithSubjectActions from "../../store/class-with-subject/class-with-subject.actions";
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
              if (Object.keys(classList).length) {
                return classList;
              } else {
                this.store.dispatch(new ClassActions.FetchClass());
                this.store.select("classList").subscribe((classList) => {
                  return classList;
                });
              }
            });
          const classWithSubjectList = this.store
            .select("classWithSubjectList")
            .subscribe((classWithSubjectList) => {
              if (Object.keys(classWithSubjectList).length) {
                return classWithSubjectList;
              } else {
                this.store.dispatch(
                  new ClassWithSubjectActions.FetchClassWithSubject()
                );
              }
            });
          const mappingObject = {
            classList: classList,
            classWithSubjectList: classWithSubjectList,
            topicWithClassSubjectList: res,
          };
          console.log(mappingObject);
          return new FetchedTopicWithClassSubject(res);
        })
      );
    })
  );
}
