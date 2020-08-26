import { Actions, Effect, ofType } from "@ngrx/effects";
import {SamplePaperService} from "./api/sample-paper.service";
import { Injectable } from "@angular/core";
import {
  SamplePaperActionsUnion,
  SamplePaperActions,
  FetchSamplePaper,
  FetchedSamplePaper,
} from "./sample-paper.actions";
import { mergeMap, map } from "rxjs/operators";

@Injectable()
export class SamplePaperEffects {
  constructor(
    private action$: Actions<SamplePaperActionsUnion>,
    private samplePaperService: SamplePaperService
  ) {}
 
  @Effect()
  addSamplePaper$ = this.action$.pipe(
    ofType(SamplePaperActions.ADD_SAMPLE_PAPER),
    map((action) => {
      return this.samplePaperService.addSamplePaper(action.payload);
    }),
    mergeMap((response) => {
      return response.pipe(
        map(() => {
          return new  FetchSamplePaper();
        })
      );
    })
  );

  @Effect()
  editSamplePaper$ = this.action$.pipe(
    ofType(SamplePaperActions.EDIT_SAMPLE_PAPER),
    map((action) => {
      return this.samplePaperService.editSamplePaperName(action.payload);
    }),
    mergeMap((response) => {
      return response.pipe(
        map(() => {
          return new FetchSamplePaper();
        })
      );
    })
  );

   @Effect()
  deleteSamplePaper$ = this.action$.pipe(
    ofType(SamplePaperActions.DELETE_SAMPLE_PAPER),
    map((action) => {
      return this.samplePaperService.removeSamplePaper(action.payload);
    }),
    mergeMap((response) => {
      return response.pipe(
        map(() => {
          return new FetchSamplePaper();
        })
      );
    })
  ); 

  @Effect()
  fetchSamplePapers$ = this.action$.pipe(
    ofType(SamplePaperActions.FETCH_SAMPLE_PAPER),
    map(() => {
      return this.samplePaperService.getSamplePapers();
    }),
    mergeMap((response) => {
      return response.pipe(
        map((res) => {
          return new FetchedSamplePaper(res);
        })
      );
    })
  );
  

}
