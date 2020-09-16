import { Action } from "@ngrx/store";


export enum StudentSamplePaperSyllabusActions {
  FETCH_SAMPLE_PAPER_SYLLABUS_STUDENT = "[StudentSamplePaperSyllabus]  Fetch StudentSamplePaperSyllabus",
  FETCHED_SAMPLE_PAPER_SYLLABUS_STUDENT = "[StudentSamplePaperSyllabus]  Fetched StudentSamplePaperSyllabus",
}

export class FetchStudentSamplePaperSyllabus implements Action {
  readonly type = StudentSamplePaperSyllabusActions.FETCH_SAMPLE_PAPER_SYLLABUS_STUDENT;
   constructor(public payload:any) {} 
}

export class FetchedStudentSamplePaperSyllabus implements Action {
  readonly type = StudentSamplePaperSyllabusActions.FETCHED_SAMPLE_PAPER_SYLLABUS_STUDENT;
  constructor(public payload:any) {} 
}

export type StudentSamplePaperSyllabusActionsUnion =
  | FetchStudentSamplePaperSyllabus
  | FetchedStudentSamplePaperSyllabus;
