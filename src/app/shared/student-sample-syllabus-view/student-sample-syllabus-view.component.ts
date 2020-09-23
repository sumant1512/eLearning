import { Component, OnInit, Input, ViewChild, ElementRef } from "@angular/core";
import { Router } from "@angular/router";
import { NotesService } from "src/app/store/notes/api/notes.service";
import { SubjectWithTopicAndSamplePaperType } from "../../store/student-sample_paper-syllabus/types/student-sample_paper-syllabus.types";

@Component({
  selector: "app-student-sample-syllabus-view",
  templateUrl: "./student-sample-syllabus-view.component.html",
  styleUrls: ["./student-sample-syllabus-view.component.css"],
})
export class StudentSampleSyllabusViewComponent implements OnInit {
  noteHeading: string;
  noteDescription: string;
  @ViewChild("overlay", { static: false }) overlay: ElementRef;
  @Input() selectedSubjectDetails: any[];
  @Input()
  resultForSyllabusAndSamplePaper: SubjectWithTopicAndSamplePaperType[];
  @Input() btnLabel: string;
  selectedSubjectId: number;
  showoverlay: boolean;
  selectedSubjectName: String;
  constructor(private router: Router, private noteService: NotesService) {}

  ngOnInit(): void {
    this.getStatus();
  }

  showNotes(notes) {
    console.log(notes);
    this.noteHeading = notes.note_heading;
    this.noteDescription = notes.note_desc;
    this.showoverlay = true;
  }
  getStatus(): boolean {
    return this.btnLabel === "Sample Paper" ? false : true;
  }
  selectSubject(subjectId, subjectName): void {
    this.selectedSubjectName = subjectName;
    this.selectedSubjectId = subjectId;
    this.selectedSubjectDetails = this.resultForSyllabusAndSamplePaper.filter(
      (data) => data.subject_id == subjectId
    );
  }

  close(): void {
    this.showoverlay = false;
  }
}
