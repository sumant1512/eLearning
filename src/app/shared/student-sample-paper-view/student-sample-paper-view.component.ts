import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-student-sample-paper-view",
  templateUrl: "./student-sample-paper-view.component.html",
  styleUrls: ["./student-sample-paper-view.component.css"],
})
export class StudentSamplePaperViewComponent implements OnInit {
  @Input() selectedSubjectDetails: any;
  @Input() resultForSyllabusAndSamplePaper: any;
  selectedSubjectId: number;
  constructor() {}

  ngOnInit() {}

  selectSubject(subjectId): void {
    this.selectedSubjectId = subjectId;
    this.selectedSubjectDetails = this.resultForSyllabusAndSamplePaper.filter(
      (data) => data.subject_id == subjectId
    );
  }
}
