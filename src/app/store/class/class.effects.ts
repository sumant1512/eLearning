import { Actions, Effect, ofType } from "@ngrx/effects";
import { ClassService } from "./api/class.service";
import { Injectable } from "@angular/core";
import {
  ClassActionsUnion,
  ClassActions,
  FetchClass,
  FetchedClass,
} from "./class.actions";
import { mergeMap, map } from "rxjs/operators";

@Injectable()
export class ClassEffects {
  constructor(
    private action$: Actions<ClassActionsUnion>,
    private classService: ClassService
  ) {}

  @Effect()
  addClass$ = this.action$.pipe(
    ofType(ClassActions.ADD_CLASS),
    map((action) => {
      return this.classService.addClass(action.payload);
    }),
    mergeMap((response) => {
      return response.pipe(
        map(() => {
          return new FetchClass();
        })
      );
    })
  );

  @Effect()
  deleteClass$ = this.action$.pipe(
    ofType(ClassActions.DELETE_CLASS),
    map((action) => {
      return this.classService.removeClass(action.payload);
    }),
    mergeMap((response) => {
      return response.pipe(
        map(() => {
          return new FetchClass();
        })
      );
    })
  );

  @Effect()
  editClass$ = this.action$.pipe(
    ofType(ClassActions.EDIT_CLASS),
    map((action) => {
      return this.classService.editClassName(action.payload);
    }),
    mergeMap((response) => {
      return response.pipe(
        map(() => {
          return new FetchClass();
        })
      );
    })
  );

  @Effect()
  fetchClasses$ = this.action$.pipe(
    ofType(ClassActions.FETCH_CLASS),
    map(() => {
      return this.classService.getClasses();
    }),
    mergeMap((response) => {
      return response.pipe(
        map((res) => {
          return new FetchedClass(res);
        })
      );
    })
  );
}
