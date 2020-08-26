import { Action } from "@ngrx/store";
import { SamplePaperListType } from "./types/sample-paper.type";

export enum SamplePaperActions {
    ADD_SAMPLE_PAPER = "[SamplePaper] Add SamplePaper",
    DELETE_SAMPLE_PAPER = "[SamplePaper] Delete SamplePaper",
    EDIT_SAMPLE_PAPER = "[SamplePaper] Edit SamplePaper",
    FETCH_SAMPLE_PAPER="[SamplePaper] Fetch SamplePaper",
    FETCHED_SAMPLE_PAPER = "[SamplePaper] Fetched SamplePaper",
  }

  export class AddSamplePaper implements Action {
    readonly type = SamplePaperActions.ADD_SAMPLE_PAPER;
    constructor(public payload: any) {}
  }
   
  export class DeleteSamplePaper implements Action {
    readonly type = SamplePaperActions.DELETE_SAMPLE_PAPER;
    constructor(public payload: any) {}
  }
  export class EditSamplePaper implements Action {
    readonly type = SamplePaperActions.EDIT_SAMPLE_PAPER;
    constructor(public payload: any) {}
  }
  export class FetchSamplePaper implements Action {
    readonly type = SamplePaperActions.FETCH_SAMPLE_PAPER;
  }
  
  export class FetchedSamplePaper implements Action {
    readonly type = SamplePaperActions.FETCHED_SAMPLE_PAPER;
    constructor(public payload: SamplePaperListType[]) {}
  }

  export type SamplePaperActionsUnion =
    | AddSamplePaper
    | DeleteSamplePaper
    | EditSamplePaper
    | FetchSamplePaper
    | FetchedSamplePaper;