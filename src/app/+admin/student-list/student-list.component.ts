import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-student-list",
  templateUrl: "./student-list.component.html",
  styleUrls: ["./student-list.component.css"],
})
export class StudentListComponent implements OnInit {
  buttonLabel: string = "Add Student";
  isStudentVisibile: boolean = true;
  constructor() {}

  ngOnInit() {}

  showHideStudents() {
    this.buttonLabel =
      this.buttonLabel === "Show Students" ? "Add Students" : "Show Students";
    this.isStudentVisibile = !this.isStudentVisibile;
  }
}
