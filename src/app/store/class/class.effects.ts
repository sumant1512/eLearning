import { Actions, Effect, ofType } from "@ngrx/effects";
import { ClassService } from "./api/class.service";
import { Injectable } from "@angular/core";
import {
  ClassActionsUnion,
  ClassActions,
  FetchClass,
  FetchedClass,
} from "./class.actions";
import { mergeMap, map, tap } from "rxjs/operators";
import { Router } from "@angular/router";

@Injectable()
export class ClassEffects {
  constructor(
    private action$: Actions<ClassActionsUnion>,
    private classService: ClassService
  ) {}

  @Effect()
  userLogin$ = this.action$.pipe(
    ofType(ClassActions.ADD_CLASS),
    map((action) => {
      return this.classService.addClass(action.payload);
    }),
    mergeMap((response) => {
      return response.pipe(
        map((res) => {
          return new FetchClass();
        })
      );
    })
  );

  @Effect()
  fetchProfile$ = this.action$.pipe(
    ofType(ClassActions.FETCH_CLASS),
    map((action) => {
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
