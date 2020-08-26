import { AuthEffects } from "./auth/auth.effects";
import { ClassEffects } from "./class/class.effects";
import { StudentEffects } from "./students/student.effects";
import { SubjectEffects } from "./subject/subject.effects";
import { TopicEffects } from "./topic/topic.effects";
import { SamplePaperEffects } from "./sample-paper/sample-paper.effects";
import { SyllabusEffects } from "./syllabus-tranform/syllabus.effects";
import { SamplePaperTransformEffects } from "./sample-paper-transform/sample-paper-transform.effects";

export const AppEffects = [
  AuthEffects,
  ClassEffects,
  SubjectEffects,
  TopicEffects,
  SamplePaperEffects,
  StudentEffects,
  SyllabusEffects,
  SamplePaperTransformEffects,
];
