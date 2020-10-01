import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
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
  constructor(private store: Store<AppState>) {}

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
}
