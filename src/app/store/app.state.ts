import { ProfileType } from "./auth/types/profile.type";
import { SubjectListType } from "./subject/types/subject.type";
import { ClassListType } from "./class/types/class.type";
import { TopicListType } from "./topic/types/topic.type";
import { SamplePaperListType } from "./sample-paper/types/sample-paper.type";

export type AppState = Partial<{
  profile: ProfileType;
  classList: ClassListType[];
  subjectList: SubjectListType[];
  topicList: TopicListType[];
  samplePaperList: SamplePaperListType[];
  students: any;
  syllabusList: any;
  samplePaperTransformList: any;
}>;
