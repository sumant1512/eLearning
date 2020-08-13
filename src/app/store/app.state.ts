import { ProfileType } from "./auth/types/profile.type";
import { SubjectListType } from "./subject/types/subject.type";
import { ClassListType } from "./class/types/class.type";

export type AppState = Partial<{
  profile: ProfileType;
  classList: ClassListType[];
  subjectList: SubjectListType[];
  students: any;
}>;
