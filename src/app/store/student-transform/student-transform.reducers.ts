import { StudentTransformActions, StudentTransformActionsUnion } from "./student-transform.actions";


const studentTransformList:any[] = [];

export function studentTransformReducer(
  state = studentTransformList,
  action: StudentTransformActionsUnion
): any[] {
  switch (action.type) {
    case StudentTransformActions.FETCHED_TRANSFORMED_STUDENT:
      return action.payload;
    default: 
      return state;
  }
}
