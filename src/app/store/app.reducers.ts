import { ActionReducerMap } from "@ngrx/store";
import { AppState } from "./app.state";
import { profileReducer } from "./auth/auth.reducers";
import { classReducer } from "./class/class.reducers";
import { studentReducer } from "./students/student.reducers";
import { subjectReducer } from "./subject/subject.reducers";
import { topicReducer } from "./topic/topic.reducers";
import { classWithSubjectReducer } from "./class-with-subject/class-with-subject.reducers";
import { topicWithClassSubjectReducer } from "./topic-with-class-subject/topic-with-class-subject.reducers";

export const appReducers: ActionReducerMap<AppState> = {
  profile: profileReducer,
  classList: classReducer,
  subjectList: subjectReducer,
  classWithSubjectList: classWithSubjectReducer,
  topicWithClassSubjectList: topicWithClassSubjectReducer,
  students: studentReducer,
  topicList: topicReducer,
};
