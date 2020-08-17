import { Component, OnInit } from "@angular/core";
import { AdminProfileService } from "../../../store/services/admin-profile.service";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store/app.state";
import * as StudentActions from "src/app/store/students/student.actions";

@Component({
  selector: "app-view-student",
  templateUrl: "./view-student.component.html",
  styleUrls: ["./view-student.component.css"],
})
export class ViewStudentComponent implements OnInit {
  students = [];
  studentName: string;
  constructor(
    private AdminprofileService: AdminProfileService,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.fetchStudents();
    this.store.dispatch(new StudentActions.FetchStudent());
  }

  fetchStudents() {
    this.store.select("students").subscribe((response) => {
      this.students = response;
    });
  }

  removeStudent(student_id): void {
    if (confirm("Are You Sure You want to Delete the Student?")) {
      this.store.dispatch(new StudentActions.DeleteStudent(student_id));
    }
  }

  startSession() {
    this.AdminprofileService.startSession().subscribe((response) => {
      if (response.status === 200) {
        alert("success");
      } else {
        alert("fail");
      }
    });
  }
}
