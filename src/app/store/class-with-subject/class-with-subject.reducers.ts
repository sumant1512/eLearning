import {
  ClassWithSubjectActions,
  ClassWithSubjectActionsUnion,
} from "./class-with-subject.actions";
import { ClassWithSubjectListType } from "./types/class-with-subject.type";

const classWithSubjectList: ClassWithSubjectListType[] = [];

export function classWithSubjectReducer(
  state = classWithSubjectList,
  action: ClassWithSubjectActionsUnion
): ClassWithSubjectListType[] {
  switch (action.type) {
    case ClassWithSubjectActions.FETCHED_CLASS_WITH_SUBJECT:
      return action.payload;
    default:
      return state;
  }
}
