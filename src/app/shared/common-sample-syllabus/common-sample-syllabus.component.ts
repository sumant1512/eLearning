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

import * as TopicActions from "../../store/topic/topic.actions";
import * as SyllabusActions from "../../store/syllabus-tranform/syllabus.actions";
import * as SamplePaperTransformActions from "../../store/sample-paper-transform/sample-paper-transform.actions";
import { SubjectService } from "../../store/subject/api/subject.service";

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
  selectedClassName: string;
  selectedClassId: number;
  resultForSyllabus;
  resultForSamperPaper;

  isAddSamplePaperFormOpen = false;
  constructor(
    private store: Store<AppState>,
    private subjectService: SubjectService
  ) {
    this.addForm = addForm();
  }

  ngOnInit(): void {
    this.getStatus();
    // this.fetchClassList();
    // this.fetchClassWithSubject();
    // this.fetchSamplePaper();
    // this.fetchTopicWithClassSubject();
    this.fetchSyllabusTransform();
    this.fetchSamplePaperTransform();
  }

  openSamplePaperForm() {
    this.isAddSamplePaperFormOpen = !this.isAddSamplePaperFormOpen;
  }

  getStatus(): boolean {
    return this.name === "Sample Paper" ? false : true;
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

  // transformForSyllabus() {
  //   this.resultForSyllabus = this.classList.map(
  //     ({ class_id: class_id, class_name: class_name }) => ({
  //       class_id,
  //       class_name,
  //       subjects: this.classWithSubjectList
  //         .filter((q) => q.class_id === class_id)
  //         .map(({ subject_id: subject_id, subject_name: subject_name }) => ({
  //           subject_id,
  //           subject_name,
  //           topics: this.topicWithClassSubjectList
  //             .filter(
  //               (q) => q.class_id === class_id && q.subject_id === subject_id
  //             )
  //             .map(({ topic_name: topic_name }) => ({
  //               topic_name,
  //             })),
  //         })),
  //     })
  //   );
  // }

  // transformForSamplePaper() {
  //   this.resultForSamperPaper = this.classList.map(
  //     ({ class_id: class_id, class_name: class_name }) => ({
  //       class_id,
  //       class_name,
  //       subjects: this.classWithSubjectList
  //         .filter((q) => q.class_id === class_id)
  //         .map(({ subject_id: subject_id, subject_name: subject_name }) => ({
  //           subject_id,
  //           subject_name,
  //           samplePapers: this.samplePaperList
  //             .filter(
  //               (q) => q.class_id === class_id && q.subject_id === subject_id
  //             )
  //             .map(({ sample_paper_name, sample_paper_url }) => ({
  //               sample_paper_name,
  //               sample_paper_url,
  //             })),
  //         })),
  //     })
  //   );
  // }

  // fetchClassList(): void {
  //   this.store.select("classList").subscribe((response) => {
  //     if (Object.keys(response).length) {
  //       this.classList = response;
  //     } else {
  //       this.store.dispatch(new ClassActions.FetchClass());
  //     }
  //   });
  // }

  // fetchClassWithSubject(): void {
  //   this.store.select("classWithSubjectList").subscribe((response) => {
  //     if (Object.keys(response).length) {
  //       this.classWithSubjectList = response;
  //     } else {
  //       this.store.dispatch(
  //         new ClassWithSubjectActions.FetchClassWithSubject()
  //       );
  //     }
  //   });
  // }

  // fetchSamplePaper(): void {
  //   this.store.select("samplePaperList").subscribe((response) => {
  //     if (Object.keys(response).length) {
  //       this.samplePaperList = response;
  //       this.transformForSamplePaper();
  //     } else {
  //       this.store.dispatch(new SamplePaperActions.FetchSamplePaper());
  //     }
  //   });
  // }

  // fetchTopicWithClassSubject(): void {
  //   this.store.select("topicWithClassSubjectList").subscribe((response) => {
  //     if (Object.keys(response).length) {
  //       this.topicWithClassSubjectList = response;
  //       this.transformForSyllabus();
  //     } else {
  //       this.store.dispatch(
  //         new TopicWithClassSubjectActions.FetchTopicWithClassSubject()
  //       );
  //     }
  //   });
  // }
  fetchSyllabusTransform(): void {
    this.store.select("syllabusList").subscribe((response) => {
      if (Object.keys(response).length) {
        this.resultForSyllabus = response;
      } else {
        this.store.dispatch(new SyllabusActions.FetchSyllabus());
      }
    });
  }
  fetchSamplePaperTransform(): void {
    this.store.select("samplePaperTransformList").subscribe((response) => {
      if (Object.keys(response).length) {
        this.resultForSamperPaper = response;
      } else {
        this.store.dispatch(
          new SamplePaperTransformActions.FetchTransformSamplePaper()
        );
      }
    });
  }
  unassignSubject(subjectId) {
    console.log(subjectId, this.selectedClassId);
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
    console.log(topic_id);
    if (confirm("Are You Sure You want to Delete the Topic?")) {
      this.store.dispatch(new TopicActions.DeleteTopic(topic_id));
    }
  }
}
