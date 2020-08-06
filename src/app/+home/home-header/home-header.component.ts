import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-home-header",
  templateUrl: "./home-header.component.html",
  styleUrls: ["./home-header.component.css"],
})
export class HomeHeaderComponent implements OnInit {
  @Output() scrollToLogin = new EventEmitter<string>();
  constructor(private router: Router) {}

  ngOnInit() {}

  navigateToRegistration() {
    this.router.navigate(["registration"]);
  }

  scrollLogin() {
    if (this.router.url === "/registration") {
      this.router.navigate(["home"]);
    }
    this.scrollToLogin.emit("loginForm");
  }
}
