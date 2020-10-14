import { TeacherActions, TeacherActionsUnion } from "./teacher.actions";
import { TeacherType } from "./types/teacher.types";

const teacherList: TeacherType[] = [];

export function teacherReducer(
  state = teacherList,
  action: TeacherActionsUnion
): TeacherType[] {
  switch (action.type) {
    case TeacherActions.FETCHED_TEACHER:
      return action.payload;
    default:
      return state;
  }
}
