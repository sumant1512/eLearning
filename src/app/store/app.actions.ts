import { AuthActionsUnion } from "./auth/auth.actions";
import { ClassActionsUnion } from "./class/class.actions";
import { StudentActionsUnion } from "./students/student.actions";
import { SubjectActionsUnion } from "./subject/subject.actions";
import { TopicActionsUnion } from "./topic/topic.actions";
import { ClassWithSubjectActionsUnion } from "./class-with-subject/class-with-subject.actions";

export type AppActionsUnion =
  | AuthActionsUnion
  | ClassActionsUnion
  | SubjectActionsUnion
  | ClassWithSubjectActionsUnion
  | TopicActionsUnion
  | StudentActionsUnion;
