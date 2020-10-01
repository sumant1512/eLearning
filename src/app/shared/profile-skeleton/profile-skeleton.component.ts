import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-profile-skeleton",
  templateUrl: "./profile-skeleton.component.html",
  styleUrls: ["./profile-skeleton.component.css"],
})
export class ProfileSkeletonComponent implements OnInit {
  @Input() Cwidth;
  @Input() Cheight;
  @Input() message: string;
  @Input() circle: boolean;
  @Input() outline: boolean;

  constructor() {}

  ngOnInit() {
  }

  getMyStyles() {
    const myStyles = {
      "width.px": this.Cwidth ? this.Cwidth : "",
      "height.px": this.Cheight ? this.Cheight : "",
      "border-radius": this.circle ? "50%" : "",
    };
    return myStyles;
  }
}
