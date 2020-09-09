import { Action } from "@ngrx/store";


export enum StudentTransformActions {
  FETCH_TRANSFORMED_STUDENT = "[TransformedStudent] Transformed Fetch Student",
  FETCHED_TRANSFORMED_STUDENT = "[TransformedStudent] Transformed Fetched Student",
}

export class FetchTransformStudent implements Action {
  readonly type = StudentTransformActions.FETCH_TRANSFORMED_STUDENT;
   constructor(public payload:any) {} 
}

export class FetchedTransformStudent implements Action {
  readonly type = StudentTransformActions.FETCHED_TRANSFORMED_STUDENT;
  constructor(public payload:any) {} 
}

export type StudentTransformActionsUnion =
  | FetchTransformStudent
  | FetchedTransformStudent;
