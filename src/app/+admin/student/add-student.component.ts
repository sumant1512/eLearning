import { Component, OnInit } from "@angular/core";
import { Validators, FormBuilder, FormGroup } from "@angular/forms";
import { AdminProfileService } from "../../store/services/admin-profile.service";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store/app.state";
import * as StudentActions from "src/app/store/students/student.actions";

@Component({
  selector: "app-add-student",
  templateUrl: "./add-student.component.html",
  styleUrls: ["./add-student.component.css"],
})
export class AddStudentComponent implements OnInit {
  buttonName = "Show Students";
  changeClass = false;

  studentRegistrationForm: FormGroup;
  classList = [
    { value: "I", label: "I" },
    { value: "II", label: "II" },
    { value: "III", label: "III" },
    { value: "IV", label: "IV" },
    { value: "V", label: "V" },
    { value: "VI", label: "VI" },
    { value: "VII", label: "VII" },
    { value: "VIII", label: "VIII" },
    { value: "IX", label: "IX" },
    { value: "X", label: "X" },
    { value: "XI", label: "XI" },
    { value: "XII", label: "XII" },
  ];

  constructor(
    private fb: FormBuilder,
    private AdminProfileService: AdminProfileService,
    private store: Store<AppState>
  ) {
    this.studentRegistrationForm = this.fb.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      fatherName: ["", Validators.required],
      class: ["", Validators.required],
      section: ["", Validators.required],
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
      //  address: this.fb.group({
      city: ["", Validators.required],
      state: ["", Validators.required],
      postalCode: [
        "",
        [Validators.required, Validators.pattern("^[0-9]{6,6}$")],
      ],
      //  }),
    });
  }

  ngOnInit(): void {
    this.displayNone();
  }
  get f() {
    return this.studentRegistrationForm.controls;
  }

  displayNone() {
    setTimeout(function(){ document.getElementById("myP1").style.display = "none"; }, 1000);
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
        ? (this.displayNone())
        : (this.displayDom());
    }

  registerStudent() {
    const studentRegistrationDetails = this.studentRegistrationForm.value;
    this.store.dispatch(
      new StudentActions.AddStudent(studentRegistrationDetails)
    );
    this.studentRegistrationForm.reset();
  }
}
