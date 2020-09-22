import { Component, OnInit } from "@angular/core";
import { AppState } from "src/app/store/app.state";
import { Store } from "@ngrx/store";
import { ProfileType } from "../../store/auth/types/profile.type";
import * as AuthActions from "../../store/auth/auth.actions";
import { AuthService } from "src/app/store/auth/api/auth.service";
import * as StudentSamplePaperSyllabusActions from "../../store/student-sample_paper-syllabus/student-sample_paper-syllabus.actions";
import { SubjectWithTopicAndSamplePaperType } from "../../store/student-sample_paper-syllabus/types/student-sample_paper-syllabus.types";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";
import { CONSTANTS } from "src/app/+admin/profile/profile.constants";

@Component({
  selector: "app-common-profile",
  templateUrl: "./common-profile.component.html",
  styleUrls: ["./common-profile.component.css"],
})
export class CommonProfileComponent implements OnInit {
  studentProfile: ProfileType;
  loaded: boolean = false;
  toggle: boolean = true;
  uploadBtnControl: boolean = true;
  btnLabel: string = "Sample Paper";
  resultForSyllabusAndSamplePaper: SubjectWithTopicAndSamplePaperType[];
  selectedSubjectDetails: SubjectWithTopicAndSamplePaperType[];
  selectedSubjectId: number;
  selectedImageDetails: Object;
  studentImageUrl: SafeUrl;
  schoolImageUrl: SafeUrl;

  constructor(
    private store: Store<AppState>,
    private authService: AuthService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.getUserProfile();
  }

  setProfileImage(): string {
    return this.studentProfile.userDetails.student_profile_picture !== null
      ? "data:image/png;base64," +
          this.studentProfile.userDetails.student_profile_picture
      : CONSTANTS.USER_IMAGE;
  }

  setCoverImage(): string {
    return (
      "data:image/png;base64," +
      this.studentProfile.userDetails.school_cover_image
    );
  }

  onImageSelect(event: any) {
    if (event.target.files && event.target.files[0]) {
      this.uploadBtnControl = false;
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.studentImageUrl = event.target.result;
        this.selectedImageDetails = {
          image: this.studentImageUrl,
          imageType: "student",
        };
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  saveImage(): void {
    this.authService
      .saveAdminImage(this.selectedImageDetails)
      .subscribe((response) => {
        if (response["status"]) {
          this.fetchUserProfile();
          alert(response["message"]);
        } else alert(response["message"]);
      });
    this.uploadBtnControl = true;
  }

  getUserProfile(): void {
    this.store.select("profile").subscribe((response) => {
      if (response.userDetails.user_id !== null) {
        this.studentProfile = response;
        this.fetchStudentSamplePaperSyllabusData(response["userDetails"]);
        this.studentImageUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
          this.setProfileImage()
        );
        this.schoolImageUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
          this.setCoverImage()
        );
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

  fetchStudentSamplePaperSyllabusData(res): void {
    this.store
      .select("studentSamplePaperSyllabusList")
      .subscribe((response) => {
        if (Object.keys(response).length) {
          this.resultForSyllabusAndSamplePaper = response;
          this.selectSubject(response[0].subject_id);
        } else {
          this.store.dispatch(
            new StudentSamplePaperSyllabusActions.FetchStudentSamplePaperSyllabus(
              {
                schoolId: res.user_id,
                classId: res.class_id,
              }
            )
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

  toggleLabelAndIconOnButton(): void {
    this.toggle = !this.toggle;
    let icon = document.getElementById("icon");
    if (this.toggle) {
      this.btnLabel = "Sample Paper";
      icon.classList.remove("fa-book");
      icon.classList.add("fa-file-text");
    } else {
      this.btnLabel = " Syllabus";
      icon.classList.remove("fa-file-text");
      icon.classList.add("fa-book");
    }
  }
}
