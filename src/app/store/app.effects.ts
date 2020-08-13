import { AuthEffects } from "./auth/auth.effects";
import { ClassEffects } from "./class/class.effects";
import { StudentEffects } from "./students/student.effects";
import { SubjectEffects } from "./subject/subject.effects";

export const AppEffects = [
  AuthEffects,
  ClassEffects,
  SubjectEffects,
  StudentEffects,
];
