import { MemoizedSelector, createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { AssingedClassSubjectList, TeacherType } from "./types/teacher.types";

export const fetchTeacherDetails = (state: AppState) => state.teachers;

export const teacherList: MemoizedSelector<
  AppState,
  TeacherType[]
> = createSelector(fetchTeacherDetails, (state) => {
  if (state) {
    return state.teacher_list;
  }
});

export const assingedClassSubjectList: MemoizedSelector<
  AppState,
  AssingedClassSubjectList[]
> = createSelector(fetchTeacherDetails, (state) => {
  if (state) {
    return state.assinged_class_subject;
  }
});
