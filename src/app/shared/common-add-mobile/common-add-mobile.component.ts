import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { addForm } from "../common.utils";

@Component({
  selector: "app-common-add-mobile",
  templateUrl: "./common-add-mobile.component.html",
  styleUrls: ["./common-add-mobile.component.css"],
})
export class CommonAddMobileComponent implements OnInit {
  @Input() classList: any;
  @Input() subjectsOfClass: any;
  @Input() name: string;
  @Output() childEvent = new EventEmitter();
  addForm: FormGroup;
  loader = false;

  constructor() {
    this.addForm = addForm();
  }

  ngOnInit() {
    this.reviewStatus();
  }
  reviewStatus(): boolean {
    if ("Topic" === this.name) return false;
    return true;
  }
  add() {
    this.loader = true;
    this.childEvent.emit(this.addForm.value.itemName);
  }
}
