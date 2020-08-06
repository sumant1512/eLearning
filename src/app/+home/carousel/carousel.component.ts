import { Component, OnInit } from "@angular/core";
import { LABELS } from "./carousel.constants";

@Component({
  selector: "app-carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.css"],
})
export class CarouselComponent implements OnInit {
  labels = LABELS;
  constructor() {}

  ngOnInit() {}
}
