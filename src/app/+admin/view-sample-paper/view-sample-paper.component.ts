import { Component, OnInit, HostListener } from "@angular/core";

@Component({
  selector: "app-view-sample-paper",
  templateUrl: "./view-sample-paper.component.html",
  styleUrls: ["./view-sample-paper.component.css"],
})
export class ViewSamplePaperComponent implements OnInit {
  isMobile = false;

  constructor() {}
  @HostListener("window:resize", ["$event"])
  onResize(event) {
    if (event.target.innerWidth < 991) {
      this.isMobile = true;
    } else {
      this.isMobile = false;
    }
  }
  ngOnInit() {
    this.isMobile = window.innerWidth < 991 ? true : false;
  }
}
