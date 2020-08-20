import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Store } from "@ngrx/store";
import { FormGroup } from "@angular/forms";
import { addForm } from "../common.utils";
import * as ClassActions from "../../store/class/class.actions";
import * as ClassWithSubjectActions from "../../store/class-with-subject/class-with-subject.actions";
import * as TopicWithClassSubjectActions from "../../store/topic-with-class-subject/topic-with-class-subject.actions";
import { AppState } from "src/app/store/app.state";
import { ClassWithSubjectListType } from "src/app/store/class-with-subject/types/class-with-subject.type";
import { ClassListType } from "src/app/store/class/types/class.type";
import { TopicWithClassSubjectListType } from "src/app/store/topic-with-class-subject/types/topic-with-class-subject.type";
import * as SamplePaperActions from "../../store/sample-paper/sample-paper.actions";
import { SamplePaperListType } from "src/app/store/sample-paper/types/sample-paper.type";

@Component({
  selector: "app-common-sample-syllabus",
  templateUrl: "./common-sample-syllabus.component.html",
  styleUrls: ["./common-sample-syllabus.component.css"],
})
export class CommonSampleSyllabusComponent implements OnInit {
  addForm: FormGroup;
  @Input() name: string;
  @Output() subjectsOfClassChildEvent = new EventEmitter();
  classWithSubjectList: ClassWithSubjectListType[];
  topicWithClassSubjectList: TopicWithClassSubjectListType[];
  samplePaperList: SamplePaperListType[];
  classList: ClassListType[];
  selectedClassDetails;
  selectedClassName;
  resultForSyllabus;
  resultForSamperPaper;

  isAddSamplePaperFormOpen = false;
  constructor(private store: Store<AppState>) {
    this.addForm = addForm();
  }

  ngOnInit(): void {
    this.getStatus();
    this.fetchClassList();
    this.fetchClassWithSubject();
    this.fetchSamplePaper();
    this.fetchTopicWithClassSubject();
  }

  openSamplePaperForm() {
    this.isAddSamplePaperFormOpen = !this.isAddSamplePaperFormOpen;
  }

  getStatus(): boolean {
    return this.name === "Sample Paper" ? false : true;
  }

  selectClass(classId, className) {
    this.selectedClassName = className;
    if (this.getStatus() && this.resultForSyllabus !== undefined)
      this.selectedClassDetails = this.resultForSyllabus.filter(
        (data) => data.class_id === classId
      );
    else if (this.resultForSamperPaper !== undefined)
      this.selectedClassDetails = this.resultForSamperPaper.filter(
        (data) => data.class_id === classId
      );
  }

  transformForSyllabus() {
    this.resultForSyllabus = this.classList.map(
      ({ class_id: class_id, class_name: class_name }) => ({
        class_id,
        class_name,
        subjects: this.classWithSubjectList
          .filter((q) => q.class_id === class_id)
          .map(({ subject_id: subject_id, subject_name: subject_name }) => ({
            subject_id,
            subject_name,
            topics: this.topicWithClassSubjectList
              .filter(
                (q) => q.class_id === class_id && q.subject_id === subject_id
              )
              .map(({ topic_name: topic_name }) => ({
                topic_name,
              })),
          })),
      })
    );
  }

  transformForSamplePaper() {
    this.resultForSamperPaper = this.classList.map(
      ({ class_id: class_id, class_name: class_name }) => ({
        class_id,
        class_name,
        subjects: this.classWithSubjectList
          .filter((q) => q.class_id === class_id)
          .map(({ subject_id: subject_id, subject_name: subject_name }) => ({
            subject_id,
            subject_name,
            samplePapers: this.samplePaperList
              .filter(
                (q) => q.class_id === class_id && q.subject_id === subject_id
              )
              .map(({ sample_paper_name, sample_paper_url }) => ({
                sample_paper_name,
                sample_paper_url,
              })),
          })),
      })
    );
  }

  fetchClassList(): void {
    this.store.select("classList").subscribe((response) => {
      if (Object.keys(response).length) {
        this.classList = response;
      } else {
        this.store.dispatch(new ClassActions.FetchClass());
      }
    });
  }

  fetchClassWithSubject(): void {
    this.store.select("classWithSubjectList").subscribe((response) => {
      if (Object.keys(response).length) {
        this.classWithSubjectList = response;
      } else {
        this.store.dispatch(
          new ClassWithSubjectActions.FetchClassWithSubject()
        );
      }
    });
  }

  fetchSamplePaper(): void {
    this.store.select("samplePaperList").subscribe((response) => {
      if (Object.keys(response).length) {
        this.samplePaperList = response;
        this.transformForSamplePaper();
      } else {
        this.store.dispatch(new SamplePaperActions.FetchSamplePaper());
      }
    });
  }

  fetchTopicWithClassSubject(): void {
    this.store.select("topicWithClassSubjectList").subscribe((response) => {
      if (Object.keys(response).length) {
        this.topicWithClassSubjectList = response;
        this.transformForSyllabus();
      } else {
        this.store.dispatch(
          new TopicWithClassSubjectActions.FetchTopicWithClassSubject()
        );
      }
    });
  }
}
