import { ProfileType } from "./auth/types/profile.type";
import { SubjectListType } from "./subject/types/subject.type";
import { ClassListType } from "./class/types/class.type";
import { TopicListType } from "./topic/types/topic.type";
import { SamplePaperListType } from "./sample-paper/types/sample-paper.type";
import { NotesListType } from "./notes/types/notes.type";
import { SubjectWithTopicAndSamplePaperType } from "./student-sample_paper-syllabus/types/student-sample_paper-syllabus.types"; 
import { StudentType } from './students/types/student.types';
import { SyllabusListType } from './syllabus-tranform/types/syllabus.type';

export type AppState = Partial<{
  profile: ProfileType;
  studentSamplePaperSyllabusList: SubjectWithTopicAndSamplePaperType[];
  classList: ClassListType[];
  subjectList: SubjectListType[];
  topicList: TopicListType[];
  samplePaperList: SamplePaperListType[]; 
  students: StudentType[];
  syllabusList: SyllabusListType[];  
  notesList: NotesListType[];
  samplePaperTransformList: any;
}>;
