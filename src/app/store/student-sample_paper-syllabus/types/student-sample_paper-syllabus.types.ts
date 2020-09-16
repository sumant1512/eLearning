export interface NotesType{
    note_id: number;
    note_heading: string;
    note_desc: string;
}

export interface TopicWithNotesType {
    topic_id: number;
    topic_name: string;
    notes: NotesType[];
}

export interface SamplePaperType {
    sample_paper_id: number;
    sample_paper_name: string;
    sample_paper_url: string;
}

export interface SubjectWithTopicAndSamplePaperType {
    subject_id: number;
    subject_name: string;
    topics: TopicWithNotesType[]; 
    samplePapers: SamplePaperType[];
}

