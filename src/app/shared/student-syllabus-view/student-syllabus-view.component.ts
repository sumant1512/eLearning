import { Component, OnInit, Input } from "@angular/core";
import { NumberFormatStyle } from "@angular/common";

@Component({
  selector: "app-student-syllabus-view",
  templateUrl: "./student-syllabus-view.component.html",
  styleUrls: ["./student-syllabus-view.component.css"],
})
export class StudentSyllabusViewComponent implements OnInit {
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
