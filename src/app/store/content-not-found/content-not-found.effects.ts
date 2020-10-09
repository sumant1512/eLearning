import { Actions, Effect, ofType } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { ContentNotFoundActionsUnion } from "./content-not-found.actions";

@Injectable()
export class ContentNotFoundEffects {
  constructor(private action$: Actions<ContentNotFoundActionsUnion>) {}
}
