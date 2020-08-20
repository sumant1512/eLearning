import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";

@Component({
  selector: "app-sample-paper",
  templateUrl: "./sample-paper.component.html",
  styleUrls: ["./sample-paper.component.css"],
})
export class SamplePaperComponent implements OnInit {
  @ViewChild("slider", { static: false }) slider: ElementRef;
  test: boolean;
  constructor() {}

  ngOnInit() {}

  slide() {
    this.slider.nativeElement.classList.add("show");
    setTimeout(() => {
      this.slider.nativeElement.classList.add("height-test");
      this.test = true;
    }, 1000);
  }
}
