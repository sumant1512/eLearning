import {
  SamplePaperActions,
  SamplePaperActionsUnion,
} from "./sample-paper.actions";
import { SamplePaperListType } from "./types/sample-paper.type";

const samplePaperList: SamplePaperListType[] = [];

export function samplePaperReducer(
  state = samplePaperList,
  action: SamplePaperActionsUnion
): SamplePaperListType[] {
  switch (action.type) {
    case SamplePaperActions.FETCHED_SAMPLE_PAPER:
      return action.payload;
    default:
      return state;
  }
}
