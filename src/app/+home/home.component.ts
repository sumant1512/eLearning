import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent {
  scrollToLogin(parameter): void {
    if (parameter) {
      document
        .getElementById(parameter)
        .scrollIntoView({ behavior: "smooth", inline: "nearest" });
    }
  }
}
