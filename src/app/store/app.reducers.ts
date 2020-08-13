import { ActionReducerMap } from "@ngrx/store";
import { AppState } from "./app.state";
import { profileReducer } from "./auth/auth.reducers";
import { classReducer } from "./class/class.reducers";
import { studentReducer } from "./students/student.reducers";
import { subjectReducer } from "./subject/subject.reducers";
export const appReducers: ActionReducerMap<AppState> = {
  profile: profileReducer,
  classList: classReducer,
  subjectList: subjectReducer,
  students: studentReducer,
};
