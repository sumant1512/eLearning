import { Component, OnInit } from "@angular/core";
import { AppState } from "src/app/store/app.state";
import { Store } from "@ngrx/store";
import { ProfileType } from "../../store/auth/types/profile.type";
import * as AuthActions from "../../store/auth/auth.actions";

@Component({
  selector: "app-common-profile",
  templateUrl: "./common-profile.component.html",
  styleUrls: ["./common-profile.component.css"],
})
export class CommonProfileComponent implements OnInit {
  studentProfile: ProfileType;
  loaded: boolean = false;
  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.getUserProfile();
  }

  getUserProfile(): void {
    this.store.select("profile").subscribe((response) => {
      if (response.userDetails.user_id !== null) {
        this.studentProfile = response;
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
}
