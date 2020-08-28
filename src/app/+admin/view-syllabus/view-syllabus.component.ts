import { Component, OnInit, HostListener } from "@angular/core";

@Component({
  selector: "app-view-syllabus",
  templateUrl: "./view-syllabus.component.html",
  styleUrls: ["./view-syllabus.component.css"],
})
export class ViewSyllabusComponent implements OnInit {
  isMobile = false;
  constructor() { }

  @HostListener("window:resize", ["$event"])
  onResize(event) {
    if (event.target.innerWidth < 991) {
      this.isMobile = true;
    } else {
      this.isMobile = false;
    }
  }
  ngOnInit(): void {
    this.isMobile = window.innerWidth < 991 ? true : false;
  }
}
