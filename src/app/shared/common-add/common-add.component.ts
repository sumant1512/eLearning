import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { addForm } from "../common.utils";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store/app.state";
import * as ClassActions from "../../store/class/class.actions";
import { SubjectService } from "src/app/store/subject/api/subject.service";
import { TopicService } from "src/app/store/topic/api/topic.service";
@Component({
  selector: "app-common-add",
  templateUrl: "./common-add.component.html",
  styleUrls: ["./common-add.component.css"],
})
export class CommonAddComponent implements OnInit {
  @Input() classList: any;
  @Input() subjectsOfClass: any;
  @Input() name: string;
  @Output() childEvent = new EventEmitter();
  @Output() subjectsOfClassChildEvent = new EventEmitter();
  addForm: FormGroup;
  loader = false;
  selectedClassId: number;
  selectedSubjectId: number;
  subjectList: any;

  constructor(
    private store: Store<AppState>,
    private topicService: TopicService
  ) {
    this.addForm = addForm();
  }

  ngOnInit() {
    this.reviewStatus();
    this.fetchClassList();
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
