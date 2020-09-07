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

@Component({
  selector: "app-common-sample-syllabus",
  templateUrl: "./common-sample-syllabus.component.html",
  styleUrls: ["./common-sample-syllabus.component.css"],
})
export class CommonSampleSyllabusComponent implements OnInit {
  addForm: FormGroup;
  @Input() name: string;
  @Output() subjectsOfClassChildEvent = new EventEmitter();
  selectedClassDetails;
  selectedClassName: string;
  selectedClassId: number;
  resultForSyllabus;
  resultForSamperPaper;

  isAddSamplePaperFormOpen = false;
  constructor(
    private store: Store<AppState>,
    private subjectService: SubjectService,
    private router: Router
  ) {
    this.addForm = addForm();
  }

  ngOnInit(): void {
    if (!this.getStatus()) {
      this.fetchSamplePaperTransform();
    } else {
      this.fetchSyllabusTransform();
      this.fetchNotesList();
    }
  }

  openSamplePaperForm() {
    this.isAddSamplePaperFormOpen = !this.isAddSamplePaperFormOpen;
  }

  getStatus(): boolean {
    return this.name === "Sample Paper" ? false : true;
  }

  fetchNotesList() {
    this.store.dispatch(new NotesActions.FetchNotes());
  }

  selectClass(classId, className) {
    this.selectedClassName = className;
    this.selectedClassId = classId;
    if (this.getStatus() && this.resultForSyllabus !== undefined)
      this.selectedClassDetails = this.resultForSyllabus.filter(
        (data) => data.class_id === classId
      );
    else if (this.resultForSamperPaper !== undefined)
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

  unassignSubject(subjectId) {
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

  removeTopic(topic_id) {
    if (confirm("Are You Sure You want to Delete the Topic?")) {
      this.store.dispatch(new TopicActions.DeleteTopic(topic_id));
    }
  }

  addnotesmobile(subject_id, subject_name, topic_id, topic_name) {
    this.router.navigate(["admin/notes"], {
      queryParams: {
        classId: this.selectedClassId,
        className: this.selectedClassName,
        subjectId: subject_id,
        subjectName: subject_name,
        topicId: topic_id,
        topicName: topic_name,
      },
    });
  }
}
