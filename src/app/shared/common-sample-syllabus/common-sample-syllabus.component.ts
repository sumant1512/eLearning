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
import { TopicService } from "src/app/store/topic/api/topic.service";
import * as SamplePaperActions from "../../store/sample-paper/sample-paper.actions";
import { SamplePaperListType } from "src/app/store/sample-paper/types/sample-paper.type";
import { SamplePaperService } from "src/app/store/sample-paper/api/sample-paper.service";
@Component({
  selector: "app-common-sample-syllabus",
  templateUrl: "./common-sample-syllabus.component.html",
  styleUrls: ["./common-sample-syllabus.component.css"],
})
export class CommonSampleSyllabusComponent implements OnInit {
  addForm: FormGroup;
  @Input() name: string;
  @Output() samplePaperChildEvent = new EventEmitter();
  @Output() subjectsOfClassChildEvent = new EventEmitter();
  classWithSubjectList: ClassWithSubjectListType[];
  topicWithClassSubjectList: TopicWithClassSubjectListType[];
  samplePaperList: SamplePaperListType[];
  selectedClassId: number;
  selectedSubjectId: number;
  classList: ClassListType[];
  subjectList: any;
  subjectsOfClass: any;
  selectedSubjects;
  selectedClassName;
  classnamewithid;
  loader = false;
  isAddSamplePaperFormOpen = false;
  constructor(
    private store: Store<AppState>,
    private topicService: TopicService,
    private samplePaperService: SamplePaperService
  ) {
    this.addForm = addForm();
  }
  ngOnInit(): void {
    this.getStatus();
    this.fetchClassList();
    this.fetchSamplePaper();
  }

  fetchSamplePaper(): void {
    this.store.select("samplePaperList").subscribe((response) => {
      if (Object.keys(response).length) {
        this.samplePaperList = response;
      } else {
        this.store.dispatch(new SamplePaperActions.FetchSamplePaper());
      }
    });
  }

  openSamplePaperForm() {
    this.isAddSamplePaperFormOpen = !this.isAddSamplePaperFormOpen;
  }
  getStatus(): boolean {
    if ("Sample Paper" === this.name) return false;
    return true;
  }

  add() {
    this.loader = true;

    this.samplePaperChildEvent.emit({
      samplePaperName: this.addForm.value.itemName,
      samplePaperUrl: this.addForm.value.itemUrl,
      classId: this.selectedClassId,
      subjectId: this.selectedSubjectId,
    });
    console.log(
      this.addForm.value.itemName,
      this.addForm.value.itemUrl,
      this.selectedClassId,
      this.selectedSubjectId
    );
  }

  fetchClassList(): void {
    this.store.select("classList").subscribe((response) => {
      if (Object.keys(response).length) {
        this.classList = response;
      } else {
        this.store.dispatch(new ClassActions.FetchClass());
        this.fetchClassWithSubject();
      }
    });
  }

  fetchClassWithSubject() {
    this.store.select("classWithSubjectList").subscribe((response) => {
      if (Object.keys(response).length) {
        this.classWithSubjectList = response;
        this.fetchTopicWithClassSubject();
      } else {
        this.store.dispatch(
          new ClassWithSubjectActions.FetchClassWithSubject()
        );
        this.fetchTopicWithClassSubject();
      }
    });
  }

  fetchTopicWithClassSubject() {
    this.store.select("topicWithClassSubjectList").subscribe((response) => {
      if (Object.keys(response).length) {
        this.topicWithClassSubjectList = response;
      } else {
        this.store.dispatch(
          new TopicWithClassSubjectActions.FetchTopicWithClassSubject()
        );
      }
    });
  }

  selectClass(classId, className) {
    this.selectedClassName = className;
    this.selectedSubjects = this.classWithSubjectList.filter(
      (subjectList) => subjectList.class_id === classId
    );

    const groups = this.selectedSubjects.reduce((acc, cur) => {
      (acc[cur.subject_name] = acc[cur.subject_name] || []).push(
        cur.topic_name
      );
      return acc;
    }, {}); // to group the array according to subject

    this.selectedSubjects = Object.keys(groups).map((key) => ({
      subject_name: key,
      topics: groups[key],
    }));
  }

  getClassForSubject(classId) {
    this.topicService.getSubjectsOfClass({ classId }).subscribe((response) => {
      if (response.length) {
        this.subjectList = response;
      }
    });
  }
  // selectedClass(id) {
  //   this.selectedClassId = id;
  //   this.subjectsOfClassChildEvent.emit(id);
  //   this.getClassForSubject(id);
  // }
  // selectedSubject(id) {
  //   this.selectedSubjectId = id;
  // }
}
