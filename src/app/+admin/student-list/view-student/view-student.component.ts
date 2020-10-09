import { Component, OnDestroy, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { StudentService } from "../../../store/students/api/student.service";
import { AppState } from "src/app/store/app.state";
import * as StudentActions from "src/app/store/students/student.actions";
import * as ClassActions from "../../../store/class/class.actions";
import { ClassListType } from "../../../store/class/types/class.type";
import { StudentType } from "../../../store/students/types/student.types";
import { Subscription } from "rxjs";

@Component({
  selector: "app-view-student",
  templateUrl: "./view-student.component.html",
  styleUrls: ["./view-student.component.css"],
})
export class ViewStudentComponent implements OnInit, OnDestroy {
  students: StudentType[];
  studentName: string;
  studentId: number;
  classList: ClassListType[];
  subscription: Subscription = new Subscription();
  constructor(
    private store: Store<AppState>,
    private studentService: StudentService
  ) {}

  ngOnInit(): void {
    this.fetchStudents();
    this.fetchClassList();
  }

  fetchStudents(): void {
    this.store.dispatch(new StudentActions.FetchStudent());
    this.subscription.add(
      this.store.select("students").subscribe((response) => {
        if (Object.keys(response).length) {
          this.students = response;
        }
      })
    );
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
    this.store.dispatch(new ClassActions.FetchClass());
    this.subscription.add(
      this.store.select("classList").subscribe((response) => {
        if (Object.keys(response).length) {
          this.classList = response;
        }
      })
    );
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

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
