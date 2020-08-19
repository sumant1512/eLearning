import { AuthEffects } from "./auth/auth.effects";
import { ClassEffects } from "./class/class.effects";
import { StudentEffects } from "./students/student.effects";
import { SubjectEffects } from "./subject/subject.effects";
import { TopicEffects } from "./topic/topic.effects";
import { ClassWithSubjectEffects } from "./class-with-subject/class-with-subject.effects";
import { TopicWithClassSubjectEffects } from "./topic-with-class-subject/topic-with-class-subject.effects";
import { SamplePaperEffects } from "./sample-paper/sample-paper.effects";
import { SyllabusEffects } from './syllabus-tranform/syllabus.effects';
import { SamplePaperTransformEffects } from './sample-paper-transform/sample-paper-transform.effects';

export const AppEffects = [
  AuthEffects,
  ClassEffects,
  SubjectEffects,
  ClassWithSubjectEffects,
  TopicWithClassSubjectEffects,
  TopicEffects,
  SamplePaperEffects,
  StudentEffects,
  SyllabusEffects,
  SamplePaperTransformEffects, 
];
