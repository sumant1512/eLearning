import { Actions, Effect, ofType } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import {
  ClassWithSubjectActionsUnion,
  ClassWithSubjectActions,
  FetchClassWithSubject,
  FetchedClassWithSubject,
} from "./class-with-subject.actions";
import { mergeMap, map } from "rxjs/operators";
import { ClassWithSubjectService } from "./api/class-with-subject.service";

@Injectable()
export class ClassWithSubjectEffects {
  constructor(
    private action$: Actions<ClassWithSubjectActionsUnion>,
    private classWithSubjectService: ClassWithSubjectService
  ) {}

  // @Effect()
  // addClass$ = this.action$.pipe(
  //   ofType(Actions.ADD_CLASS),
  //   map((action) => {
  //     return this.classService.addClass(action.payload);
  //   }),
  //   mergeMap((response) => {
  //     return response.pipe(
  //       map(() => {
  //         return new FetchClass();
  //       })
  //     );
  //   })
  // );

  // @Effect()
  // deleteClass$ = this.action$.pipe(
  //   ofType(ClassActions.DELETE_CLASS),
  //   map((action) => {
  //     return this.classService.removeClass(action.payload);
  //   }),
  //   mergeMap((response) => {
  //     return response.pipe(
  //       map(() => {
  //         return new FetchClass();
  //       })
  //     );
  //   })
  // );

  // @Effect()
  // editClass$ = this.action$.pipe(
  //   ofType(ClassActions.EDIT_CLASS),
  //   map((action) => {
  //     return this.classService.editClassName(action.payload);
  //   }),
  //   mergeMap((response) => {
  //     return response.pipe(
  //       map(() => {
  //         return new FetchClass();
  //       })
  //     );
  //   })
  // );

  @Effect()
  fetchClassWithSubject$ = this.action$.pipe(
    ofType(ClassWithSubjectActions.FETCH_CLASS_WITH_SUBJECT),
    map(() => {
      return this.classWithSubjectService.getClassWithSubject();
    }),
    mergeMap((response) => {
      return response.pipe(
        map((res) => {
          return new FetchedClassWithSubject(res);
        })
      );
    })
  );
}
