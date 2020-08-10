import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { DomSanitizer } from "@angular/platform-browser";
import { schoolImageForm } from "./profile.utils";
import { CONSTANTS } from "./profile.constants";
import { AdminProfileService } from "src/app/store/services/admin-profile.service";
import { AppState } from "src/app/store/app.state";
import { Store } from "@ngrx/store";
import { ProfileType } from "src/app/store/auth/types/profile.type";
import * as AuthActions from "../../store/auth/auth.actions";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"],
})
export class ProfileComponent implements OnInit {
  schoolImageForm: FormGroup;
  adminProfile: ProfileType;
  coverImageUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
    CONSTANTS.School_Building
  );
  studentImageUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
    CONSTANTS.USER_IMAGE
  );

  constructor(
    private store: Store<AppState>,
    private sanitizer: DomSanitizer,
    private adminProfileService: AdminProfileService
  ) {
    this.schoolImageForm = schoolImageForm();
  }

  ngOnInit(): void {
    this.getUserProfile();
  }

  getUserProfile(): void {
    this.store.select("profile").subscribe((response) => {
      if (response.userDetails.user_id) {
        this.adminProfile = response;
      } else {
        this.fetchUserProfile();
      }
    });
  }

  fetchUserProfile() {
    const authToken = localStorage.getItem("AUTH_TOKEN");
    this.store.dispatch(new AuthActions.FetchProfile(authToken));
    this.store.select("profile").subscribe((response) => {
      this.adminProfile = response;
    });
  }

  onImageSelect(event: any, name) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event: any) => {
        switch (name) {
          case "school":
            this.studentImageUrl = event.target.result;
            break;
          case "cover_image":
            this.coverImageUrl = event.target.result;
            break;
        }
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  saveSchoolImage(): void {
    this.schoolImageForm.value.schoolImage = this.studentImageUrl;
    this.adminProfileService
      .saveSchoolImage(this.schoolImageForm.value)
      .subscribe((response) => {
        if (response["status"]) {
          alert("Image saved");
        } else {
          alert("Error");
        }
      });
  }

  saveCoverImage() {
    this.schoolImageForm.value.schoolImage = this.coverImageUrl;
    this.adminProfileService
      .saveCoverImage(this.schoolImageForm.value)
      .subscribe((response) => {
        if (response["status"]) {
          alert("Image saved");
        } else {
          alert("Error");
        }
      });
  }
}
