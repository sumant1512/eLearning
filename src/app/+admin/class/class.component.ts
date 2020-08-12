import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "app-class",
  templateUrl: "./class.component.html",
  styleUrls: ["./class.component.css"],
})
export class ClassComponent {
  @ViewChild("slider", { static: false }) slider: ElementRef;
  isAddClassMobile = false;
  isAddClassFormOpen = false;
  openAddClassForm() {
    this.isAddClassFormOpen = true;
  }

  ngOnInit() {
    if (window.innerWidth < 1024) {
      this.isAddClassMobile = true;
    }
    window.onresize = () => {
      this.isAddClassMobile = window.innerWidth < 1024;
      this.isAddClassFormOpen = false;
    };
  }

  sliderOpen() {
    this.slider.nativeElement.classList.toggle("show");
  }
}
