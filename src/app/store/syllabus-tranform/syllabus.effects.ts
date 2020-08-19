import { Actions, Effect, ofType } from "@ngrx/effects";
import { SyllabusService } from "./api/syllabus.service";
import { Injectable } from "@angular/core";
import {
  SyllabusActionsUnion,
  SyllabusActions,
  FetchSyllabus,
  FetchedSyllabus,
} from "./syllabus.actions";
import { mergeMap, map } from "rxjs/operators";

@Injectable()
export class SyllabusEffects {
  constructor(
    private action$: Actions<SyllabusActionsUnion>,
    private syllabusService: SyllabusService
  ) {}

  

  @Effect()
  fetchSyllabus$ = this.action$.pipe(
    ofType(SyllabusActions.FETCH_SYLLABUS),
    map(() => {
      return this.syllabusService.getTransformedSyllabus();
    }),
    mergeMap((response) => {
      return response.pipe(
        map((res) => {
          return new FetchedSyllabus(res);
        })
      );
    })
  );
}
