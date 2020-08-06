import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { addClassForm } from "./add-class.utils";

@Component({
  selector: "app-add-class",
  templateUrl: "./add-class.component.html",
  styleUrls: ["./add-class.component.css"],
})
export class AddClassComponent implements OnInit {
  addClassForm: FormGroup;
  constructor() {
    this.addClassForm = addClassForm();
  }

  ngOnInit(): void {}

  addClass() {}
}
