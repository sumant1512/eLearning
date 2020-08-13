import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
  HostListener,
} from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-home-header",
  templateUrl: "./home-header.component.html",
  styleUrls: ["./home-header.component.css"],
})
export class HomeHeaderComponent {
  @ViewChild("header", { static: false }) header: ElementRef;
  @Output() scrollToLogin = new EventEmitter<string>();
  constructor(private router: Router) {}

  @HostListener("window:scroll", [])
  onWindowScroll() {
    const number =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    if (number > 100) {
      this.header.nativeElement.classList.add("cus-nav");
    } else {
      this.header.nativeElement.classList.remove("cus-nav");
    }
  }

  navigateToRegistration() {
    this.router.navigate(["registration"]);
  }

  scrollLogin() {
    if (this.router.url !== "/home") {
      this.router.navigate(["home"]);
    } else {
      this.scrollToLogin.emit("loginForm");
    }
  }
}
