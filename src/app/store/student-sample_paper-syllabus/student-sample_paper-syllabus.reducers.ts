import { StudentSamplePaperSyllabusActions, StudentSamplePaperSyllabusActionsUnion } from "./student-sample_paper-syllabus.actions";
import { SubjectWithTopicAndSamplePaperType } from "./types/student-sample_paper-syllabus.types";

const studentSamplePaperSyllabusList:SubjectWithTopicAndSamplePaperType[] = [];

export function studentSamplePaperSyllabusReducer(
  state = studentSamplePaperSyllabusList,
  action: StudentSamplePaperSyllabusActionsUnion
): SubjectWithTopicAndSamplePaperType[] {
  switch (action.type) {
    case StudentSamplePaperSyllabusActions.FETCHED_SAMPLE_PAPER_SYLLABUS_STUDENT:
      return action.payload;
    default: 
      return state; 
  } 
}
