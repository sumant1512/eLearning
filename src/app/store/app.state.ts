import { ProfileType } from "./auth/types/profile.type";
import { SubjectListType } from "./subject/types/subject.type";
import { ClassListType } from "./class/types/class.type";
import { TopicListType } from "./topic/types/topic.type";
import { ClassWithSubjectListType } from "./class-with-subject/types/class-with-subject.type";

export type AppState = Partial<{
  profile: ProfileType;
  classList: ClassListType[];
  subjectList: SubjectListType[];
  classWithSubjectList: ClassWithSubjectListType[];
  students: any;
  topicList: TopicListType[];
}>;
