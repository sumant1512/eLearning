import { Component, OnDestroy, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";
import { AppState } from "src/app/store/app.state";
import { ProfileType } from "src/app/store/auth/types/profile.type";
import * as AuthActions from "../../store/auth/auth.actions";
import { AuthService } from "src/app/store/auth/api/auth.service";
import * as StudentActions from "src/app/store/students/student.actions";
import { ImageType } from "src/app/shared/common-profile/types/common-profile.type";
import { Subscription } from "rxjs";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"],
})
export class ProfileComponent implements OnInit, OnDestroy {
  adminProfile: ProfileType;
  selectedImageDetails: ImageType;
  subscription: Subscription = new Subscription();

  schoolImageUrl: SafeUrl;
  adminImageUrl: SafeUrl;

  studentCount: number;
  loaded: boolean = false;
  uploadBtnControl: boolean = true;
  saveBtnControl: boolean = true;

  constructor(
    private store: Store<AppState>,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.getUserProfile();
    // this.fetchStudents();
  }

  getUserProfile(): void {
    this.fetchUserProfile();
    this.subscription.add(
      this.store.select("profile").subscribe((response) => {
        if (response.userDetails.user_id !== null) {
          this.adminProfile = response;
        }
      })
    );
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

  fetchStudents(): void {
    this.subscription.add(
      this.store.select("students").subscribe((response) => {
        if (Object.keys(response).length !== 0) {
          this.studentCount = response.length;
        } else {
          this.store.dispatch(new StudentActions.FetchStudent());
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
