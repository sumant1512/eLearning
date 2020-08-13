import { ClassActions, ClassActionsUnion } from "./class.actions";
import { ClassListType } from "./types/class.type";

const classList: ClassListType[] = [];

export function classReducer(
  state = classList,
  action: ClassActionsUnion
): ClassListType[] {
  switch (action.type) {
    case ClassActions.FETCHED_CLASS:
      return action.payload;
    default:
      return state;
  }
}
