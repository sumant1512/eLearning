import { ProfileType } from "./auth/types/profile.type";
import { SubjectListType } from "./subject/types/subject.type";
import { ClassListType } from "./class/types/class.type";
import { TopicListType } from "./topic/types/topic.type";
import { ClassWithSubjectListType } from "./class-with-subject/types/class-with-subject.type";
import { TopicWithClassSubjectListType } from "./topic-with-class-subject/types/topic-with-class-subject.type";

export type AppState = Partial<{
  profile: ProfileType;
  classList: ClassListType[];
  subjectList: SubjectListType[];
  classWithSubjectList: ClassWithSubjectListType[];
  topicWithClassSubjectList: TopicWithClassSubjectListType[];
  students: any;
  topicList: TopicListType[];
}>;
