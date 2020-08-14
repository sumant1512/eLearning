import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { addForm } from "../common.utils";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store/app.state";
import * as ClassActions from "../../store/class/class.actions";
import { TopicService } from "src/app/store/topic/api/topic.service";
import { SubjectListType } from "src/app/store/subject/types/subject.type";
import { ClassListType } from "src/app/store/class/types/class.type";

@Component({
  selector: "app-common-add-mobile",
  templateUrl: "./common-add-mobile.component.html",
  styleUrls: ["./common-add-mobile.component.css"],
})
export class CommonAddMobileComponent implements OnInit {
  classList: ClassListType[];
  @Input() subjectsOfClass: any;
  @Input() name: string;
  @Output() childEvent = new EventEmitter();
  @Output() subjectsOfClassChildEvent = new EventEmitter();
  addForm: FormGroup;
  loader = false;
  selectedClassId: number;
  selectedSubjectId: number;
  subjectList: SubjectListType[];

  constructor(
    private store: Store<AppState>,
    private topicService: TopicService
  ) {
    this.addForm = addForm();
  }

  ngOnInit() {
    this.fetchClassList();
    this.reviewStatus();
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

  getClassForSubject(classId) {
    this.topicService.getSubjectsOfClass({ classId }).subscribe((response) => {
      if (response.length) {
        this.subjectList = response;
      }
    });
  }
  reviewStatus(): boolean {
    if ("Topic" === this.name) return false;
    return true;
  }
  add() {
    this.loader = true;
    if ("Topic" === this.name)
      this.childEvent.emit({
        topicName: this.addForm.value.itemName,
        classId: this.selectedClassId,
        subjectId: this.selectedSubjectId,
      });
    else this.childEvent.emit(this.addForm.value.itemName);
  }
  selectedClass(id) {
    this.selectedClassId = id;
    this.subjectsOfClassChildEvent.emit(id);
    this.getClassForSubject(id);
  }
  selectedSubject(id) {
    this.selectedSubjectId = id;
  }
}
