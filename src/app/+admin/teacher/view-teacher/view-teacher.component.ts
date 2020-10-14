import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Subscription } from "rxjs";
import { AppState } from "src/app/store/app.state";
import * as TeacherActions from "src/app/store/teacher/teacher.actions";
import { TeacherType } from "src/app/store/teacher/types/teacher.types";

@Component({
  selector: "app-view-teacher",
  templateUrl: "./view-teacher.component.html",
  styleUrls: ["./view-teacher.component.css"],
})
export class ViewTeacherComponent implements OnInit {
  teachers: TeacherType[];
  teacherName: string;
  teacherId: number;
  subscription: Subscription = new Subscription();
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.fetchTeachers();
  }

  fetchTeachers(): void {
    this.store.dispatch(new TeacherActions.FetchTeacher());
    this.subscription.add(
      this.store.select("teachers").subscribe((response) => {
        if (Object.keys(response).length) {
          this.teachers = response;
        }
      })
    );
  }

  removeTeacher(teacher_id): void {
    if (confirm("Are You Sure You want to Delete the Teacher?")) {
      this.store.dispatch(new TeacherActions.DeleteTeacher(teacher_id));
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
