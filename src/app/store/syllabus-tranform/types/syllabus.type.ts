export interface TopicType {
  topic_id: number;
  topic_name: string;
}

export interface SubjectType {
    subject_id: number;
    subject_name: string;
    topics: TopicType[]; 
}

export interface SyllabusListType {
  class_id: number;
  class_name: string;
  subjects: SubjectType[];
}