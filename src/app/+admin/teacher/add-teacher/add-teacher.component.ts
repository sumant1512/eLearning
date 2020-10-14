import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store/app.state";
import { teacherRegistrationForm } from "../../teacher/add-teacher/add-teacher.utils";
import * as TeacherActions from "src/app/store/teacher/teacher.actions";

@Component({
  selector: "app-add-teacher",
  templateUrl: "./add-teacher.component.html",
  styleUrls: ["./add-teacher.component.css"],
})
export class AddTeacherComponent implements OnInit {
  teacherRegistrationForm: FormGroup;
  constructor(private store: Store<AppState>) {
    this.teacherRegistrationForm = teacherRegistrationForm();
  }

  ngOnInit() {}

  get f() {
    return this.teacherRegistrationForm.controls;
  }

  registerTeacher(): void {
    console.log(this.teacherRegistrationForm.value);
    const teacherRegistrationDetails = this.teacherRegistrationForm.value;
    this.store.dispatch(
      new TeacherActions.AddTeacher(teacherRegistrationDetails)
    );
    this.teacherRegistrationForm.reset();
  }
}
