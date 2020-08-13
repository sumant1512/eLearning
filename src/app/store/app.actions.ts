import { AuthActionsUnion } from "./auth/auth.actions";
import { ClassActionsUnion } from "./class/class.actions";
import { StudentActionsUnion } from "./students/student.actions";
import { SubjectActionsUnion } from "./subject/subject.actions";
import { TopicActionsUnion } from './topic/topic.actions';

export type AppActionsUnion =
  | AuthActionsUnion
  | ClassActionsUnion
  | SubjectActionsUnion
  | TopicActionsUnion
  | StudentActionsUnion;
