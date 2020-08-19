import { SamplePaperTransformActions, SamplePaperTransformActionsUnion } from "./sample-paper-transform.actions";
// import { ClassListType } from "./types/class.type";

const samplePaperTransformList:any[] = [];

export function samplePaperTransformReducer(
  state = samplePaperTransformList,
  action: SamplePaperTransformActionsUnion
): any[] {
  switch (action.type) {
    case SamplePaperTransformActions.FETCHED_TRANSFORMED_SAMPLEPAPER:
      return action.payload;
    default: 
      return state;
  }
}
