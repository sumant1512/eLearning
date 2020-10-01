export interface AccordionSampleSyllabusType {
  selectedClassDetails: SelectedClassDetailsType[];
  name: string;
  hasNote: boolean;
}

export interface SelectedClassDetailsType {
  class_id: number;
  class_name: string;
  subjects: SubjectsOfTopicAndSamplePapertype[];
}

export interface SubjectsOfTopicAndSamplePapertype {
  subject_id: number;
  subject_name: string;
  topics?: TopicType[];
  samplePapers?: SamplePapersType[];
}

export interface SamplePapersType {
  sample_paper_name: string;
  sample_paper_url: string;
}

export interface TopicType {
  topic_id: number;
  topic_name: string;
  notes?: NotesType[];
}

export interface NotesType {
  note_desc: string;
  note_heading: string;
  note_id: number;
}
