import { SubjectActions, SubjectActionsUnion } from "./subject.actions";
import { SubjectListType } from "./types/subject.type";

const subjectList: SubjectListType[] = [];

export function subjectReducer(
  state = subjectList,
  action: SubjectActionsUnion
): SubjectListType[] {
  switch (action.type) {
    case SubjectActions.FETCHED_SUBJECT:
      return action.payload;
    default:
      return state;
  }
}
