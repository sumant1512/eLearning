import { Actions, Effect, ofType } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import {
  ContentNotFoundActions,
  ContentNotFoundActionsUnion,
  SetContentNotFoundFlag,
} from "./content-not-found.actions";
import { Router } from "@angular/router";
import { map } from "rxjs/operators";

@Injectable()
export class ContentNotFoundEffects {
  constructor(private action$: Actions<ContentNotFoundActionsUnion>) {}

  // @Effect()
  // setContentNotFound$ = this.action$.pipe(
  //   ofType(ContentNotFoundActions.SET_CONTENT_NOT_FOUND_FLAG),
  //   map((action) => {
  //     new SetContentNotFoundFlag(action.payload);
  //   })
  // );
}
