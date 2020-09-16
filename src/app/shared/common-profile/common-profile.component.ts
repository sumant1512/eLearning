import { Component, OnInit } from "@angular/core";
import { AppState } from "src/app/store/app.state";
import { Store } from "@ngrx/store";
import { ProfileType } from "../../store/auth/types/profile.type";
import * as AuthActions from "../../store/auth/auth.actions";
import * as StudentSamplePaperSyllabusActions from "../../store/student-sample_paper-syllabus/student-sample_paper-syllabus.actions";
import { SubjectWithTopicAndSamplePaperType } from "../../store/student-sample_paper-syllabus/types/student-sample_paper-syllabus.types";

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
  resultForSyllabusAndSamplePaper: SubjectWithTopicAndSamplePaperType[];
  selectedSubjectDetails:SubjectWithTopicAndSamplePaperType[]; 
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
    this.store.select("studentSamplePaperSyllabusList").subscribe((response) => {
      if (Object.keys(response).length) {
        this.resultForSyllabusAndSamplePaper = response;
        this.selectSubject(response[0].subject_id);
      } else {
        this.store.dispatch(
          new StudentSamplePaperSyllabusActions.FetchStudentSamplePaperSyllabus({
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

  toggleIcon(): void {
    var icon = document.getElementById("icon");

    if (icon.classList.contains("fa-file-text")) {
      icon.classList.remove("fa-file-text");
      icon.classList.add("fa-book");
    } else {
      icon.classList.remove("fa-book");
      icon.classList.add("fa-file-text");
    }
  }
}
