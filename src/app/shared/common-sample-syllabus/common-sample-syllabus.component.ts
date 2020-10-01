import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Store } from "@ngrx/store";
import { FormGroup } from "@angular/forms";
import { addForm } from "../common.utils";
import { AppState } from "src/app/store/app.state";

import * as TopicActions from "../../store/topic/topic.actions";
import * as SyllabusActions from "../../store/syllabus-tranform/syllabus.actions";
import * as NotesActions from "../../store/notes/notes.actions";
import * as SamplePaperTransformActions from "../../store/sample-paper-transform/sample-paper-transform.actions";
import { SubjectService } from "../../store/subject/api/subject.service";
import { Router } from "@angular/router";
import { NotesListType } from "src/app/store/notes/types/notes.type";
import { SyllabusListType } from "src/app/store/syllabus-tranform/types/syllabus.type";
import { SamplePaperListType } from "src/app/store/sample-paper/types/sample-paper.type";
import { SelectedClassDetailsType } from "../types/accordion.type";

@Component({
  selector: "app-common-sample-syllabus",
  templateUrl: "./common-sample-syllabus.component.html",
  styleUrls: ["./common-sample-syllabus.component.css"],
})
export class CommonSampleSyllabusComponent implements OnInit {
  addForm: FormGroup;
  @Input() name: string;
  @Input() user: string;
  @Output() subjectsOfClassChildEvent = new EventEmitter();
  selectedClassDetails;
  selectedClassName: string;
  selectedClassId: number;
  resultForNotes: NotesListType[];
  resultForSyllabus: SyllabusListType[];
  resultForSamperPaper: SamplePaperListType[];

  isAddSamplePaperFormOpen = false;

  viewValue: boolean = true;
  noteArray: NotesListType[];
  hasNote: boolean;
  httpClient: any;
  toggleState: boolean;

  constructor(
    private store: Store<AppState>,
    private subjectService: SubjectService,
    private router: Router
  ) {
    this.addForm = addForm();
  }

  ngOnInit(): void {
    if (this.name === "Sample Paper") {
      this.fetchSamplePaperTransform();
    } else {
      this.fetchSyllabusTransform();
    }
    this.fetchNotesList();
  }

  fetchNotesList() {
    this.store.select("notesList").subscribe((response) => {
      if (Object.keys(response).length) {
        this.resultForNotes = response;
      } else {
        this.store.dispatch(new NotesActions.FetchNotes());
      }
    });
  }

  openSamplePaperForm() {
    this.isAddSamplePaperFormOpen = !this.isAddSamplePaperFormOpen;
  }

  getStatusNotes(): boolean {
    return this.name === "Notes" ? false : true;
  }

  selectClass(classId, className): void {
    this.selectedClassName = className;
    this.selectedClassId = classId;
    if (this.name === "Syllabus" && this.resultForSyllabus !== undefined) {
      this.selectedClassDetails = this.resultForSyllabus.filter(
        (data) => data.class_id === classId
      );
    } else if (this.resultForSamperPaper !== undefined)
      this.selectedClassDetails = this.resultForSamperPaper.filter(
        (data) => data.class_id === classId
      );
  }

  fetchSyllabusTransform(): void {
    this.store.select("syllabusList").subscribe((response) => {
      if (Object.keys(response).length) {
        this.resultForSyllabus = response;
        this.selectClass(
          this.resultForSyllabus[0].class_id,
          this.resultForSyllabus[0].class_name
        );
      } else {
        this.store.dispatch(new SyllabusActions.FetchSyllabus());
      }
    });
  }

  fetchSamplePaperTransform(): void {
    this.store.select("samplePaperTransformList").subscribe((response) => {
      if (Object.keys(response).length) {
        this.resultForSamperPaper = response;
        this.selectClass(
          this.resultForSamperPaper[0].class_id,
          this.resultForSamperPaper[0].class_name
        );
      } else {
        this.store.dispatch(
          new SamplePaperTransformActions.FetchTransformSamplePaper()
        );
      }
    });
  }

  unassignSubject(subjectId): void {
    this.subjectService
      .unAssignSubjectToClass({ subjectId, classId: this.selectedClassId })
      .subscribe((response) => {
        if (response["status"]) {
          alert(response["message"]);
        } else {
          alert(response["message"]);
        }
      });
  }

  removeTopic(topicId): void {
    if (confirm("Are You Sure You want to Delete the Topic?")) {
      this.store.dispatch(new TopicActions.DeleteTopic(topicId));
    }
    console.log(topicId);
  }

  addNotes(addNotesDetails): void {
    this.router.navigate(["admin/notes"], {
      queryParams: {
        classId: this.selectedClassId,
        className: this.selectedClassName,
        subjectId: addNotesDetails.subjectId,
        subjectName: addNotesDetails.subjectName,
        topicId: addNotesDetails.topicId,
        topicName: addNotesDetails.topicName,
        view: !this.viewValue,
      },
    });
  }

  viewNotes(viewNotesDetails): void {
    this.router.navigate(["admin/notes"], {
      queryParams: {
        classId: this.selectedClassId,
        className: this.selectedClassName,
        subjectName: viewNotesDetails.subjectName,
        topicId: viewNotesDetails.topicId,
        topicName: viewNotesDetails.topicName,
        view: this.viewValue,
      },
    });
  }

  sortByTopic(topicId): void {
    this.noteArray = this.resultForNotes.filter(
      (data) => data.topic_id == topicId
    );
    if (this.noteArray.length < 1) this.hasNote = false;
    else this.hasNote = true;
  }

  navigateToVideoRecorder(topicId): void {
    this.router.navigate(["/admin/video"], {
      queryParams: {
        classId: this.selectedClassId,
        topicId,
        view: !this.viewValue,
      },
    });
  }

  navigateToViewVideo(topicId): void {
    this.router.navigate(["/admin/video"], {
      queryParams: {
        topicId,
        view: this.viewValue,
      },
    });
  }
}
