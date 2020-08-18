import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { DomSanitizer } from "@angular/platform-browser";
import { schoolImageForm } from "./profile.utils";
import { CONSTANTS } from "./profile.constants";
import { AppState } from "src/app/store/app.state";
import { Store } from "@ngrx/store";
import { ProfileType } from "src/app/store/auth/types/profile.type";
import * as AuthActions from "../../store/auth/auth.actions";
import { AuthService } from "src/app/store/auth/api/auth.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"],
})
export class ProfileComponent implements OnInit {
  schoolImageForm: FormGroup;
  adminProfile: ProfileType;
  schoolImageUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
    CONSTANTS.School_Building
  );
  adminImageUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
    CONSTANTS.USER_IMAGE
  );

  constructor(
    private store: Store<AppState>,
    private authService: AuthService,
    private sanitizer: DomSanitizer
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
          case "admin":
            this.adminImageUrl = event.target.result;
            break;
          case "school_image":
            this.schoolImageUrl = event.target.result;
            break;
        }
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  saveAdminImage(): void {
    this.schoolImageForm.value.schoolImage = this.adminImageUrl;
    this.authService
      .saveAdminImage(this.schoolImageForm.value.adminImage)
      .subscribe((response) => {
        console.log(response);
      });
  }

  saveSchoolImage() {
    this.schoolImageForm.value.schoolImage = this.schoolImageUrl;
    this.authService
      .saveAdminImage(this.schoolImageForm.value.schoolImage)
      .subscribe((response) => {
        console.log(response);
      });
  }
}
