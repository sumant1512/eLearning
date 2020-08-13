import { ProfileType } from "./auth/types/profile.type";
import { SubjectListType } from "./subject/types/subject.type";
import { ClassListType } from "./class/types/class.type";
import { TopicListType } from "./topic/types/topic.type";

export type AppState = Partial<{
  profile: ProfileType;
  classList: ClassListType[];
  subjectList: SubjectListType[];
  students: any;
  topicList: TopicListType[];
}>;
