import { NotesService } from './../../store/notes/api/notes.service';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SubjectWithTopicAndSamplePaperType } from 'src/app/store/student-sample_paper-syllabus/types/student-sample_paper-syllabus.types';

@Component({
  selector: "app-student-sample-syllabus-mobile-view",
  templateUrl: "./student-sample-syllabus-mobile-view.component.html",
  styleUrls: ["./student-sample-syllabus-mobile-view.component.css"],
})
export class StudentSampleSyllabusMobileViewComponent implements OnInit {
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
  go() {
    console.log(this.selectedSubjectDetails);
    console.log(this.resultForSyllabusAndSamplePaper);
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
  showNotes(notes) {
    this.noteHeading = notes.note_heading;
    this.noteDescription = notes.note_desc;
    this.showoverlay = true;
    console.log(notes);
  }
  close(): void {
    this.showoverlay = false;
  }
}
