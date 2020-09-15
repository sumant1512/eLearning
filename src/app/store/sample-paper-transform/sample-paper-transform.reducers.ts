import { SamplePaperListType } from '../sample-paper/types/sample-paper.type';
import { SamplePaperTransformActions, SamplePaperTransformActionsUnion } from "./sample-paper-transform.actions";


const samplePaperTransformList:SamplePaperListType[] = [];

export function samplePaperTransformReducer(
  state = samplePaperTransformList,
  action: SamplePaperTransformActionsUnion
): SamplePaperListType[] {
  switch (action.type) {
    case SamplePaperTransformActions.FETCHED_TRANSFORMED_SAMPLEPAPER:
      return action.payload;
    default: 
      return state;
  }
}
