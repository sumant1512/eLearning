import { AuthActionsUnion } from "./auth/auth.actions";
import { ClassActionsUnion } from "./class/class.actions";
import { StudentActionsUnion } from "./students/student.actions";
import { SubjectActionsUnion } from "./subject/subject.actions";
import { TopicActionsUnion } from "./topic/topic.actions";
import { ClassWithSubjectActionsUnion } from "./class-with-subject/class-with-subject.actions";
import { TopicWithClassSubjectActionsUnion } from "./topic-with-class-subject/topic-with-class-subject.actions";
import { SamplePaperActionsUnion } from "./sample-paper/sample-paper.actions";
import { SyllabusActionsUnion } from './syllabus-tranform/syllabus.actions';
import { SamplePaperTransformActionsUnion } from './sample-paper-transform/sample-paper-transform.actions';

export type AppActionsUnion =
  | AuthActionsUnion
  | ClassActionsUnion
  | SubjectActionsUnion 
  | ClassWithSubjectActionsUnion
  | TopicWithClassSubjectActionsUnion
  | TopicActionsUnion
  | SamplePaperActionsUnion
  | StudentActionsUnion
  | SyllabusActionsUnion
  | SamplePaperTransformActionsUnion
