import { StudentActions, StudentActionsUnion } from "./student.actions";
import { StudentType } from './types/student.types';

const studentList:StudentType[]=[];

export function studentReducer(
  state = studentList,
  action: StudentActionsUnion
): StudentType[] {
  switch (action.type) {
    case StudentActions.FETCHED_STUDENT:
      return action.payload;
    default: 
      return state;
  }
}
