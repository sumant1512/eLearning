import { ClassActions, ClassActionsUnion } from "./class.actions";

const classList: any = {};

export function classReducer(
  state = classList,
  action: ClassActionsUnion
): any {
  switch (action.type) {
    case ClassActions.FETCHED_CLASS:
      return action.payload;
    default:
      return state;
  }
}
