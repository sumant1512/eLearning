import { Component, OnInit, Input } from "@angular/core";
import { SubjectWithTopicAndSamplePaperType } from "../../store/student-sample_paper-syllabus/types/student-sample_paper-syllabus.types";

@Component({
  selector: 'app-student-sample-syllabus-view',
  templateUrl: './student-sample-syllabus-view.component.html',
  styleUrls: ['./student-sample-syllabus-view.component.css']
})
export class StudentSampleSyllabusViewComponent implements OnInit {
  @Input() selectedSubjectDetails: SubjectWithTopicAndSamplePaperType[];
  @Input() resultForSyllabusAndSamplePaper: SubjectWithTopicAndSamplePaperType[]; 
  @Input() btnLabel: string; 
  selectedSubjectId: number;
  constructor() {}

  ngOnInit(): void {
    this.getStatus();
  }
  getStatus(): boolean {
      return this.btnLabel === "Sample Paper" ? false : true; 
  }
  selectSubject(subjectId): void {
    this.selectedSubjectId = subjectId;
    this.selectedSubjectDetails = this.resultForSyllabusAndSamplePaper.filter(
      (data) => data.subject_id == subjectId
    );
  }
  
}
