import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-home-header",
  templateUrl: "./home-header.component.html",
  styleUrls: ["./home-header.component.css"],
})
export class HomeHeaderComponent implements OnInit {
  @ViewChild("homeHeader", { static: false }) homeHeader: ElementRef;
  @Output() scrollToLogin = new EventEmitter<string>();
  constructor(private router: Router) {}

  ngOnInit() {
    window.addEventListener("scroll", function () {
      let menuArea = document.getElementById("men");

      if (window.pageYOffset > 350) {
        //menuArea.classList.add("cus-nav");
      } else {
       // menuArea.classList.remove("cus-nav");
      }
    });
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
