import { Component, ViewChild, ElementRef, HostListener } from "@angular/core";
import { AppState } from "src/app/store/app.state";
import { Store } from "@ngrx/store";
import * as AuthActions from "../../store/auth/auth.actions";
import { Router } from "@angular/router";
@Component({
  selector: "app-admin-header",
  templateUrl: "./admin-header.component.html",
  styleUrls: ["./admin-header.component.css"],
})
export class AdminHeaderComponent {
  @ViewChild("header", { static: false }) header: ElementRef;
  scrollStatus: boolean = false;
  sideNavStatus: boolean;
  @HostListener("window:scroll", [])
  onWindowScroll() {
    const number =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    if (number > 300) {
      this.scrollStatus = true;
      this.header.nativeElement.classList.add("sticky");
    } else {
      this.scrollStatus = false;
      this.header.nativeElement.classList.remove("sticky");
    }
  }

  constructor(private store: Store<AppState>, private router: Router) {}

  logout() {
    this.store.dispatch(new AuthActions.UserLogout());
  }

  navigateToConference() {
    window.open(
      "https://rtcmulticonnection.herokuapp.com/demos/video-conferencing.html",
      "_blank"
    );
  }
}
