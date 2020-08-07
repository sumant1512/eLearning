import { Component, ViewChild, ElementRef, HostListener } from "@angular/core";
@Component({
  selector: "app-admin-header",
  templateUrl: "./admin-header.component.html",
  styleUrls: ["./admin-header.component.css"],
})
export class AdminHeaderComponent {
  @ViewChild("header", { static: false }) header: ElementRef;
  scrollStatus: boolean = false;
  sideNavStatus: boolean;
  @HostListener("window:scroll", [])
  onWindowScroll() {
    const number =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    if (number > 450) {
      this.scrollStatus = true;
      this.header.nativeElement.classList.add("sticky");
    } else {
      this.scrollStatus = false;
      this.header.nativeElement.classList.remove("sticky");
    }
  }
}
