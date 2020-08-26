import { Action } from "@ngrx/store";
// import { SamplePaperListType } from "./types/samplepaper.type";

export enum SamplePaperTransformActions {
  FETCH_TRANSFORMED_SAMPLEPAPER = "[TransformedSamplePaper] Transformed Fetch SamplePaper",
  FETCHED_TRANSFORMED_SAMPLEPAPER = "[TransformedSamplePaper] Transformed Fetched SamplePaper",
}

export class FetchTransformSamplePaper implements Action {
  readonly type = SamplePaperTransformActions.FETCH_TRANSFORMED_SAMPLEPAPER;
}

export class FetchedTransformSamplePaper implements Action {
  readonly type = SamplePaperTransformActions.FETCHED_TRANSFORMED_SAMPLEPAPER;
  constructor(public payload) {} 
}

export type SamplePaperTransformActionsUnion =
  | FetchTransformSamplePaper
  | FetchedTransformSamplePaper;
