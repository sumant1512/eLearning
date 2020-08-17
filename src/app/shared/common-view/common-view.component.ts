import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { SubjectService } from "src/app/store/subject/api/subject.service";
import { editForm, assignSubjectForm } from "../common.utils";
import { ClassListType } from "src/app/store/class/types/class.type";
import { SubjectListType } from "src/app/store/subject/types/subject.type";
import { TopicListType } from "src/app/store/topic/types/topic.type";

@Component({
  selector: "app-common-view",
  templateUrl: "./common-view.component.html",
  styleUrls: ["./common-view.component.css"],
})
export class CommonViewComponent implements OnInit {
  editForm: FormGroup;
  assignSubjectForm: FormGroup;
  @Input() viewList: ClassListType[] | SubjectListType[] | TopicListType[];
  @Input() name: string;
  @Output() childEvent = new EventEmitter();
  @Output() editChildEvent = new EventEmitter();
  @Output() assignClassChildEvent = new EventEmitter();
  unassignedClassList: ClassListType[];
  previousId: number;
  selectedSubjectId: number;
  constructor(private subejctService: SubjectService) {
    this.editForm = editForm();
    this.assignSubjectForm = assignSubjectForm();
  }

  ngOnInit(): void {
    this.checkStatus();
  }

  // finctuin to show/hide assign icon
  checkStatus(): boolean {
    return this.name === "Subject" ? false : true;
  }

  // function to delete item
  remove(id): void {
    this.childEvent.emit(id);
  }

  // to select the content which is selected for edit
  selectedItem(name, id): void {
    this.editForm.patchValue({ newitemName: name });
    this.previousId = id;
  }

  // function to emit details for assigning class
  selectSubject(subjectId): void {
    this.subejctService
      .getClassesOfUnassignedSubjects({ subjectId })
      .subscribe((response) => {
        this.unassignedClassList = response;
      });
    this.selectedSubjectId = subjectId;
  }

  // function to assign subject
  assignSubject(): void {
    let assignDetails = {
      subjectId: this.selectedSubjectId,
      classId: this.assignSubjectForm.value.classId,
    };
    this.assignClassChildEvent.emit(assignDetails);
  }

  // emit for edit item
  editItem(): void {
    this.editChildEvent.emit({
      updatedName: this.editForm.value.newitemName,
      id: this.previousId,
    });
    this.makeEditFormPristine();
  }

  makeEditFormPristine() {
    this.editForm.markAsPristine();
  }
}
