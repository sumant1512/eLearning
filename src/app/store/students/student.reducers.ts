import {StudentActions, StudentActionsUnion } from "./student.actions";

const studentList=[];

export function studentReducer(
  state = studentList,
  action: StudentActionsUnion
): any {
  switch (action.type) {
    case StudentActions.FETCHED_STUDENT:
      return action.payload;
    default:
      return state;
  }
}
