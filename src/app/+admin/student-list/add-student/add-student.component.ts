import { Component, OnInit } from "@angular/core";
import { Validators, FormBuilder, FormGroup } from "@angular/forms";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store/app.state";
import * as StudentActions from "src/app/store/students/student.actions";
import * as ClassActions from "../../../store/class/class.actions";
import { ClassListType } from "src/app/store/class/types/class.type";
import { studentRegistrationForm } from './add-student.utils';

@Component({
  selector: "app-add-student",
  templateUrl: "./add-student.component.html",
  styleUrls: ["./add-student.component.css"],
})
export class AddStudentComponent implements OnInit {
  buttonName = "Show Students";
  isStudentVisibile: boolean;

  studentRegistrationForm: FormGroup;
  classList: ClassListType[];

  constructor( private store: Store<AppState>) {
    this.studentRegistrationForm = studentRegistrationForm();
  }

  ngOnInit(): void {
    this.fetchClassList();
  }

  get f() {
    return this.studentRegistrationForm.controls;
  }

  showHideStudents() {
    this.buttonName =
      this.buttonName === "Show Students" ? "Add Students" : "Show Students";
    this.isStudentVisibile = !this.isStudentVisibile;
  }

  registerStudent(): void {
    const studentRegistrationDetails = this.studentRegistrationForm.value;
    this.store.dispatch(
      new StudentActions.AddStudent(studentRegistrationDetails)
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
}
