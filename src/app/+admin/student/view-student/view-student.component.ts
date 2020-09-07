import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { StudentService } from "../../../store/students/api/student.service";
import { AppState } from "src/app/store/app.state";
import * as StudentActions from "src/app/store/students/student.actions";
import * as ClassActions from "../../../store/class/class.actions";
import { ClassListType } from "../../../store/class/types/class.type";

@Component({
  selector: "app-view-student",
  templateUrl: "./view-student.component.html",
  styleUrls: ["./view-student.component.css"],
})
export class ViewStudentComponent implements OnInit {
  students = [];
  studentName: string;
  classList: ClassListType[];
  constructor(
    private store: Store<AppState>,
    private studentService: StudentService
  ) {}

  ngOnInit(): void {
    this.fetchStudents();
    this.fetchClassList();
  }

  fetchStudents(): void {
    this.store.select("students").subscribe((response) => {
      if (Object.keys(response).length) {
        this.students = response;
      } else {
        this.store.dispatch(new StudentActions.FetchStudent());
      }
    });
  }

  removeStudent(student_id): void {
    if (confirm("Are You Sure You want to Delete the Student?")) {
      this.store.dispatch(new StudentActions.DeleteStudent(student_id));
    }
  }

  startSession(): void {
    this.studentService.startSession().subscribe((response) => {
      if (response["status"]) {
        alert(response["message"]);
      } else {
        alert(response["message"]);
      }
    });
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

  changeClass(classId, studentId): void {
    this.studentService
      .updateClassofStudent({ studentId, classId })
      .subscribe((response) => {
        if (response["status"]) {
          alert(response["message"]);
        } else {
          alert(response["message"]);
        }
      });
  }
}
