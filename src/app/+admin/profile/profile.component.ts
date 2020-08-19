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
  selectedImageDetails: Object;
  schoolImageUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
    CONSTANTS.SCHOOL_IMAGE
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
    //this.schoolImageForm.value.adminImage = this.adminImageUrl;
    console.log(this.selectedImageDetails);
    this.authService
      .saveAdminImage(this.selectedImageDetails)
      .subscribe((response) => {
        if (response["status"]) alert(response["message"]);
        else alert(response["message"]);
      });
  }
}
