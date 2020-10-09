import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-content-not-found",
  templateUrl: "./content-not-found.component.html",
  styleUrls: ["./content-not-found.component.css"],
})
export class ContentNotFoundComponent implements OnInit {
  errorCode = "404";
  errorName = "Content Not Found";
  constructor() {}

  ngOnInit() {}
}
