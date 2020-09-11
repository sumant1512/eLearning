import { Component, OnInit } from "@angular/core";
import { AppState } from "src/app/store/app.state";
import { Store } from "@ngrx/store";
import { ProfileType } from "../../store/auth/types/profile.type";
import * as AuthActions from "../../store/auth/auth.actions";
import * as StudentTransformActions from "../../store/student-transform/student-transform.actions";

@Component({
  selector: "app-common-profile",
  templateUrl: "./common-profile.component.html",
  styleUrls: ["./common-profile.component.css"],
})
export class CommonProfileComponent implements OnInit {
  studentProfile: ProfileType;
  loaded: boolean = false;
  toggle: boolean = true;
  btnLabel: string = "Sample Paper";
  resultForSyllabusAndSamplePaper: any;
  selectedSubjectDetails;
  selectedSubjectId: number;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.getUserProfile();
  }

  getUserProfile(): void {
    this.store.select("profile").subscribe((response) => {
      if (response.userDetails.user_id !== null) {
        this.studentProfile = response;
        this.fetchTransformData(response["userDetails"]);
        this.loaded = true;
      } else {
        this.fetchUserProfile();
      }
    });
  }

  fetchUserProfile(): void {
    const authToken = localStorage.getItem("AUTH_TOKEN");
    this.store.dispatch(new AuthActions.FetchProfile(authToken));
  }

  fetchTransformData(res): void {
    this.store.select("studentTransformList").subscribe((response) => {
      if (Object.keys(response).length) {
        this.resultForSyllabusAndSamplePaper = response;
        this.selectSubject(response[0].subject_id);
      } else {
        this.store.dispatch(
          new StudentTransformActions.FetchTransformStudent({
            schoolId: res.user_id,
            classId: res.class_id,
          })
        );
      }
    });
  }

  selectSubject(subjectId): void {
    this.selectedSubjectId = subjectId;
    this.selectedSubjectDetails = this.resultForSyllabusAndSamplePaper.filter(
      (data) => data.subject_id == subjectId
    );
  }

  toggleButton(): void {
    this.toggle = !this.toggle;
    if (this.toggle) this.btnLabel = "Sample Paper";
    else this.btnLabel = " Syllabus";
  }
}
