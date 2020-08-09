import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "app-class",
  templateUrl: "./class.component.html",
  styleUrls: ["./class.component.css"],
})
export class ClassComponent {
  isAddClassFormOpen = false;
  openAddClassForm() {
    this.isAddClassFormOpen = true;
  }
}
