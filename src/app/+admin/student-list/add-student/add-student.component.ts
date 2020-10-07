import { Component, OnDestroy, OnInit } from "@angular/core";
import { Validators, FormBuilder, FormGroup } from "@angular/forms";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store/app.state";
import * as StudentActions from "src/app/store/students/student.actions";
import * as ClassActions from "../../../store/class/class.actions";
import { ClassListType } from "src/app/store/class/types/class.type";
import { studentRegistrationForm } from "./add-student.utils";
import { Subscription } from "rxjs";

@Component({
  selector: "app-add-student",
  templateUrl: "./add-student.component.html",
  styleUrls: ["./add-student.component.css"],
})
export class AddStudentComponent implements OnInit, OnDestroy {
  buttonName = "Show Students";
  isStudentVisibile: boolean;

  studentRegistrationForm: FormGroup;
  classList: ClassListType[];
  subscription: Subscription = new Subscription();

  constructor(private store: Store<AppState>) {
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
    this.studentRegistrationForm.reset();
  }

  fetchClassList(): void {
    this.store.dispatch(new ClassActions.FetchClass());
    this.subscription.add(
      this.store.select("classList").subscribe((response) => {
        if (Object.keys(response).length) {
          this.classList = response;
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
