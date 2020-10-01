import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { SelectedClassDetailsType } from "src/app/shared/accordion/types/accordion.type";
import { AppState } from "src/app/store/app.state";
import * as AuthActions from "../../store/auth/auth.actions";
import * as StudentSamplePaperSyllabusActions from "../../store/student-sample_paper-syllabus/student-sample_paper-syllabus.actions";

@Component({
  selector: "app-student-sample-paper",
  templateUrl: "./student-sample-paper.component.html",
  styleUrls: ["./student-sample-paper.component.css"],
})
export class StudentSamplePaperComponent implements OnInit {
  selectedClassDetails: SelectedClassDetailsType[];
  name = "Sample Paper";
  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.getUserProfile();
  }

  getUserProfile(): void {
    this.store.select("profile").subscribe((response) => {
      if (response.userDetails.user_id !== null) {
        this.fetchStudentSamplePaperSyllabusData(response.userDetails);
      } else {
        this.fetchUserProfile();
      }
    });
  }

  fetchUserProfile(): void {
    const authToken = localStorage.getItem("AUTH_TOKEN");
    this.store.dispatch(new AuthActions.FetchProfile(authToken));
  }

  fetchStudentSamplePaperSyllabusData(res): void {
    const requestParams = {
      schoolId: res.user_id,
      classId: res.class_id,
    };
    this.store.dispatch(
      new StudentSamplePaperSyllabusActions.FetchStudentSamplePaperSyllabus(
        requestParams
      )
    );
    this.store
      .select("studentSamplePaperSyllabusList")
      .subscribe((response) => {
        if (Object.keys(response).length) {
          this.selectedClassDetails = [
            {
              class_id: res.class_id,
              class_name: res.class_name,
              subjects: response,
            },
          ];
        }
      });
  }
}
