import { Actions, Effect, ofType } from "@ngrx/effects";
import { SamplepapertransformService } from "./api/samplepapertransform.service";
import { Injectable } from "@angular/core";
import {
  SamplePaperTransformActionsUnion,
  SamplePaperTransformActions,
  FetchTransformSamplePaper,
  FetchedTransformSamplePaper,
} from "./sample-paper-transform.actions";
import { mergeMap, map } from "rxjs/operators";

@Injectable()
export class SamplePaperTransformEffects {
  constructor(
    private action$: Actions<SamplePaperTransformActionsUnion>,
    private samplepapertransformService: SamplepapertransformService
  ) {}


  @Effect()
  fetchSamplePaper$ = this.action$.pipe(
    ofType(SamplePaperTransformActions.FETCH_TRANSFORMED_SAMPLEPAPER),
    map(() => {
      return this.samplepapertransformService.getTransformedSamplePaper();
    }),
    mergeMap((response) => {
      return response.pipe(
        map((res) => {
          return new FetchedTransformSamplePaper(res);
        })
      );
    })
  );
}
