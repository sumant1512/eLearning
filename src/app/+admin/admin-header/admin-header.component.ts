import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";
@Component({
  selector: "app-admin-header",
  templateUrl: "./admin-header.component.html",
  styleUrls: ["./admin-header.component.css"],
})
export class AdminHeaderComponent implements OnInit {
  @Output() slideToLogin = new EventEmitter<string>();
  showSelected: boolean;
  showLogout: boolean;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    window.addEventListener("scroll", function () {
      let menuArea = document.getElementById("men");

      if (window.pageYOffset > 250) {
        menuArea.classList.add("cus-nav");
      } else {
        menuArea.classList.remove("cus-nav");
      }
    });
  }
  logout() {
    this.authService.logout();
    this.showSelected = true;
    this.showLogout = false;
    this.router.navigateByUrl("/home");
  }
}
