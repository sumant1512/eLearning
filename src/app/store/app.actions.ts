import { AuthActionsUnion } from "./auth/auth.actions";
import { ClassActionsUnion } from "./class/class.actions";
import { StudentActionsUnion } from "./students/student.actions";
import { SubjectActionsUnion } from "./subject/subject.actions";
import { TopicActionsUnion } from "./topic/topic.actions";
import { SamplePaperActionsUnion } from "./sample-paper/sample-paper.actions";
import { SyllabusActionsUnion } from "./syllabus-tranform/syllabus.actions";
import { SamplePaperTransformActionsUnion } from "./sample-paper-transform/sample-paper-transform.actions";
import { NotesActionsUnion } from "./notes/notes.actions";
import { StudentSamplePaperSyllabusActionsUnion } from "./student-sample_paper-syllabus/student-sample_paper-syllabus.actions";
import {VideoActionsUnion,} from "./video/video.actions";


export type AppActionsUnion =
  | AuthActionsUnion
  | StudentSamplePaperSyllabusActionsUnion
  | ClassActionsUnion
  | SubjectActionsUnion
  | TopicActionsUnion
  | SamplePaperActionsUnion
  | StudentActionsUnion
  | SyllabusActionsUnion
  | NotesActionsUnion
  | SamplePaperTransformActionsUnion
  | VideoActionsUnion;
