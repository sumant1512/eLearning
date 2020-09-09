import { ProfileType } from "./auth/types/profile.type";
import { SubjectListType } from "./subject/types/subject.type";
import { ClassListType } from "./class/types/class.type";
import { TopicListType } from "./topic/types/topic.type";
import { SamplePaperListType } from "./sample-paper/types/sample-paper.type";
import { NotesListType } from "./notes/types/notes.type";

export type AppState = Partial<{
  profile: ProfileType;
  studentTransformList: any;
  classList: ClassListType[];
  subjectList: SubjectListType[];
  topicList: TopicListType[];
  samplePaperList: SamplePaperListType[];
  students: any;
  syllabusList: any;
  notesList: NotesListType[];
  samplePaperTransformList: any;
}>;
