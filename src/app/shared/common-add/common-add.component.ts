import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup } from '@angular/forms';
import { addForm } from '../common.utils';
@Component({
  selector: 'app-common-add',
  templateUrl: './common-add.component.html',
  styleUrls: ['./common-add.component.css']
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

  constructor() {
    this.addForm=addForm() 
   }

  ngOnInit() {
    this.reviewStatus();
  }
  reviewStatus(): boolean{
    if ('Topic' === this.name)
      return false;
    return true; 
  }
  add() {
    this.loader = true;
    if ('Topic' === this.name)
      this.childEvent.emit({
        topicId: this.addForm.value.itemName,
        classId: this.selectedClassId,
        subjectId: this.selectedSubjectId
      });
    else
      this.childEvent.emit(this.addForm.value.itemName);
  }
  selectedClass(id) {
    this.selectedClassId = id
    this.subjectsOfClassChildEvent.emit(id);
  }
  selectedSubject(id) {
    this.selectedSubjectId=id
  }

}
