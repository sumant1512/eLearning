import { AuthActionsUnion } from "./auth/auth.actions";
import { ClassActionsUnion } from "./class/class.actions";
import { StudentActionsUnion } from "./students/student.actions";
import { SubjectActionsUnion } from "./subject/subject.actions";

export type AppActionsUnion =
  | AuthActionsUnion
  | ClassActionsUnion
  | SubjectActionsUnion
  | StudentActionsUnion;
