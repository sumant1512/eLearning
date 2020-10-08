import { ActionReducerMap } from "@ngrx/store";
import { AppState } from "./app.state";
import { profileReducer } from "./auth/auth.reducers";
import { classReducer } from "./class/class.reducers";
import { studentReducer } from "./students/student.reducers";
import { subjectReducer } from "./subject/subject.reducers";
import { topicReducer } from "./topic/topic.reducers";
import { samplePaperReducer } from "./sample-paper/sample-paper.reducer";
import { syllabusReducer } from "./syllabus-tranform/syllabus.reducers";
import { samplePaperTransformReducer } from "./sample-paper-transform/sample-paper-transform.reducers";
import { notesReducer } from "./notes/notes.reducers";
import { studentSamplePaperSyllabusReducer } from "./student-sample_paper-syllabus/student-sample_paper-syllabus.reducers";
import { videoReducer } from "./video/video.reducers";
import { contentNotFoundReducer } from "./content-not-found/content-not-found.reducers";

export const appReducers: ActionReducerMap<AppState> = {
  isContentNotFound: contentNotFoundReducer,
  profile: profileReducer,
  studentSamplePaperSyllabusList: studentSamplePaperSyllabusReducer,
  classList: classReducer,
  subjectList: subjectReducer,
  topicList: topicReducer,
  samplePaperList: samplePaperReducer,
  students: studentReducer,
  syllabusList: syllabusReducer,
  notesList: notesReducer,
  samplePaperTransformList: samplePaperTransformReducer,
  videoList: videoReducer,
};
