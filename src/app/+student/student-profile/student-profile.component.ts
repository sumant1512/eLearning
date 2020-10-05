import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Subscription } from "rxjs";
import { ImageType } from "src/app/shared/common-profile/types/common-profile.type";
import { AuthService } from "src/app/store/auth/api/auth.service";
import { AppState } from "../../store/app.state";
import * as AuthActions from "../../store/auth/auth.actions";
import { ProfileType } from "../../store/auth/types/profile.type";

@Component({
  selector: "app-student-profile",
  templateUrl: "./student-profile.component.html",
  styleUrls: ["./student-profile.component.css"],
})
export class StudentProfileComponent implements OnInit {
  studentProfile: ProfileType;
  selectedImageDetails: ImageType;
  subscription: Subscription = new Subscription();
  constructor(
    private store: Store<AppState>,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.getUserProfile();
  }

  getUserProfile(): void {
    this.store.select("profile").subscribe((response) => {
      if (response.userDetails.user_id !== null) {
        this.studentProfile = response;
      } else {
        this.fetchUserProfile();
      }
    });
  }

  fetchUserProfile(): void {
    const authToken = localStorage.getItem("AUTH_TOKEN");
    this.store.dispatch(new AuthActions.FetchProfile(authToken));
  }

  onImageSelect(event: ImageType) {
    this.selectedImageDetails = event;
  }

  saveImage(event: string): void {
    if (event === "save") {
      this.subscription.add(
        this.authService
          .saveImage(this.selectedImageDetails)
          .subscribe((response) => {
            if (response["status"]) {
              this.fetchUserProfile();
              alert(response["message"]);
            } else alert(response["message"]);
          })
      );
    }
  }
}
