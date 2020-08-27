import { Component, OnInit } from "@angular/core";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";
import { CONSTANTS } from "./profile.constants";
import { AppState } from "src/app/store/app.state";
import { Store } from "@ngrx/store";
import { ProfileType } from "src/app/store/auth/types/profile.type";
import * as AuthActions from "../../store/auth/auth.actions";
import { AuthService } from "src/app/store/auth/api/auth.service";
import * as StudentActions from "src/app/store/students/student.actions";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"],
})
export class ProfileComponent implements OnInit {
  adminProfile: ProfileType;
  selectedImageDetails: Object;

  schoolImageUrl: SafeUrl;
  adminImageUrl: SafeUrl;

  studentCount: number;

  constructor(
    private store: Store<AppState>,
    private authService: AuthService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.getUserProfile();
    this.fetchStudents();
  }

  setCoverImage(): string {
    return this.adminProfile.userDetails.school_cover_image !== null
      ? "data:image/png;base64," +
          this.adminProfile.userDetails.school_cover_image
      : CONSTANTS.SCHOOL_IMAGE;
  }
  setProfileImage(): string {
    return this.adminProfile.userDetails.admin_profile_picture !== null
      ? "data:image/png;base64," +
          this.adminProfile.userDetails.admin_profile_picture
      : CONSTANTS.USER_IMAGE;
  }
  getUserProfile(): void {
    this.store.select("profile").subscribe((response) => {
      if (response.userDetails.user_id !== null) {
        this.adminProfile = response;
        this.schoolImageUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
          this.setCoverImage()
        );
        this.adminImageUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
          this.setProfileImage()
        );
      } else {
        this.fetchUserProfile();
      }
    });
  }
  fetchUserProfile(): void {
    const authToken = localStorage.getItem("AUTH_TOKEN");
    this.store.dispatch(new AuthActions.FetchProfile(authToken));
  }
  onImageSelect(event: any, name) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event: any) => {
        switch (name) {
          case "admin":
            this.adminImageUrl = event.target.result;
            this.selectedImageDetails = {
              image: this.adminImageUrl,
              imageType: name,
            };
            break;
          case "school_image":
            this.schoolImageUrl = event.target.result;
            this.selectedImageDetails = {
              image: this.schoolImageUrl,
              imageType: name,
            };
            break;
        }
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
  }
  fetchStudents(): void {
    this.store.select("students").subscribe((response) => {
      if (Object.keys(response).length) {
        this.studentCount = response.length;
      } else {
        this.store.dispatch(new StudentActions.FetchStudent());
      }
    });
  }
}
