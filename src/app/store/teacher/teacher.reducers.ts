import { TeacherActions, TeacherActionsUnion } from "./teacher.actions";
import {
  TeacherType,
  TeacherTypeWithAssingedClassList,
} from "./types/teacher.types";

const teacherList: TeacherTypeWithAssingedClassList = {
  teacher_list: [],
  assinged_class_subject: [],
};

export function teacherReducer(
  state = teacherList,
  action: TeacherActionsUnion
): TeacherTypeWithAssingedClassList {
  switch (action.type) {
    case TeacherActions.FETCHED_TEACHER:
      return action.payload;
    default:
      return state;
  }
}
