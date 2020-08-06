import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-description-card",
  templateUrl: "./description-card.component.html",
  styleUrls: ["./description-card.component.css"],
})
export class DescriptionCardComponent implements OnInit {
  descriptionList = [
    {
      description: "Enroll yourself now",
    },
    {
      description: "Be an active participant",
    },
    {
      description: "Fall in love with learning",
    },
  ];
  constructor() {}

  ngOnInit() {}
}
