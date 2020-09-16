export interface SamplePaperType {
    sample_paper_id: number;
    sample_paper_name: string;
    sample_paper_url: string;
}

export interface SubjectType {
  subject_id: number;
    subject_name: string;
    samplePapers: SamplePaperType[];
}

export interface SamplePaperListType {
  class_id: number;
  class_name: string;
    subjects: SubjectType[];
}