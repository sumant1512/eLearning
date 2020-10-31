import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";

export const fetchSyllabusList = (state: AppState) => state.syllabusList;

export const fetchSubjectList = (classId: number) =>
  createSelector(fetchSyllabusList, (state) => {
    let subjectList: any = [];
    if (!(state === [] || state === undefined)) {
      subjectList = state.filter((data) => data.class_id == classId)[0]
        .subjects;
    }
    return subjectList;
  });
