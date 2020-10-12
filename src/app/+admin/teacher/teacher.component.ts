import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-teacher",
  templateUrl: "./teacher.component.html",
  styleUrls: ["./teacher.component.css"],
})
export class TeacherComponent implements OnInit {
  buttonLabel: string = "Add teacher";
  isStudentVisibile: boolean = true;
  constructor() {}

  ngOnInit(): void {}
  showHideStudents() {
    this.buttonLabel =
      this.buttonLabel === "Show teacher" ?"Add teacher" : "Show teacher";
    this.isStudentVisibile = !this.isStudentVisibile;
  }
}

