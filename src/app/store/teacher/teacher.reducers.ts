import { TeacherActions, TeacherActionsUnion } from "./teacher.actions";
import {
  TeacherType,
  TeacherTypeWithAssingedClassList,
} from "./types/teacher.types";

const teacherList: TeacherTypeWithAssingedClassList = {
  teacher_list: [],
  tagged_subject_with_teacher: [],
};

export function teacherReducer(
  state = teacherList,
  action: TeacherActionsUnion
): TeacherTypeWithAssingedClassList {
  switch (action.type) {
    case TeacherActions.FETCHED_TEACHER:
      return {
        ...state,
        teacher_list: action.payload,
      };
    case TeacherActions.FETCHED_TAGGGED_SUBJECT_TO_TEACHER:
      return {
        ...state,
        tagged_subject_with_teacher: action.payload,
      };
    default:
      return state;
  }
}
