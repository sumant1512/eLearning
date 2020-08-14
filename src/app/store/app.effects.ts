import { AuthEffects } from "./auth/auth.effects";
import { ClassEffects } from "./class/class.effects";
import { StudentEffects } from "./students/student.effects";
import { SubjectEffects } from "./subject/subject.effects";
import { TopicEffects } from "./topic/topic.effects";
import { ClassWithSubjectEffects } from "./class-with-subject/class-with-subject.effects";
import { TopicWithClassSubjectEffects } from "./topic-with-class-subject/topic-with-class-subject.effects";

export const AppEffects = [
  AuthEffects,
  ClassEffects,
  SubjectEffects,
  ClassWithSubjectEffects,
  TopicWithClassSubjectEffects,
  StudentEffects,
  TopicEffects,
];
