import { Component, OnInit } from "@angular/core";
import { Validators, FormBuilder, FormGroup } from "@angular/forms";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store/app.state";
import * as StudentActions from "src/app/store/students/student.actions";
import * as ClassActions from "../../store/class/class.actions";
import { ClassListType } from "src/app/store/class/types/class.type";
import * as $ from "jquery";

@Component({
  selector: "app-add-student",
  templateUrl: "./add-student.component.html",
  styleUrls: ["./add-student.component.css"],
})
export class AddStudentComponent implements OnInit {
  buttonName = "Show Students";
  changeClass = false;

  studentRegistrationForm: FormGroup;
  classList: ClassListType[];

  constructor(private fb: FormBuilder, private store: Store<AppState>) {
    this.studentRegistrationForm = this.fb.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      fatherName: ["", Validators.required],
      class: ["", Validators.required],
      dob: ["", Validators.required],
      email: [
        "",
        [
          Validators.required,
          Validators.pattern(
            "^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$"
          ),
        ],
      ],
      mobile: [
        "",
        [
          Validators.required,
          Validators.pattern("^((\\+91-?)|0)?[1-9]{1}[0-9]{9}$"),
        ],
      ],
      gender: ["", Validators.required],
      city: ["", Validators.required],
      state: ["", Validators.required],
      postalCode: [
        "",
        [Validators.required, Validators.pattern("^[0-9]{6,6}$")],
      ],
    });
  }

  ngOnInit(): void {
    this.displayNone();
    this.fetchClassList();
  }

  get f() {
    return this.studentRegistrationForm.controls;
  }

  displayNone() {
    setTimeout(function () {
      document.getElementById("myP1").style.display = "none";
    }, 1000);
  }

  displayDom() {
    document.getElementById("myP1").style.display = "";
  }

  showHideStudents() {
    this.buttonName === "Show Students"
      ? (this.buttonName = "Add Student")
      : (this.buttonName = "Show Students");
    this.changeClass = !this.changeClass;

    this.buttonName === "Show Students"
      ? this.displayNone()
      : this.displayDom();
  }

  registerStudent(): void {
    const studentRegistrationDetails = this.studentRegistrationForm.value;
    this.store.dispatch(
      new StudentActions.AddStudent(studentRegistrationDetails)
    );
    this.studentRegistrationForm.reset();
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
