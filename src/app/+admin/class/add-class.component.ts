import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { addClassForm } from "./add-class.utils";
import { ClassService } from "src/app/services/class.service";

@Component({
  selector: "app-add-class",
  templateUrl: "./add-class.component.html",
  styleUrls: ["./add-class.component.css"],
})
export class AddClassComponent implements OnInit {
  addClassForm: FormGroup;
  isAddClassFormOpen = false;
  loader: boolean;
  constructor(private classService: ClassService) {
    this.addClassForm = addClassForm();
  }

  ngOnInit(): void {}

  openAddClassForm() {
    this.isAddClassFormOpen = true;
  }

  addClass(): void {
    this.loader = true;
    const classDetails = this.addClassForm.value;
    this.classService.addClass(classDetails).subscribe((response) => {
      if (response["status"]) {
        alert("class added");
        this.loader = false;
      } else {
        alert("failed");
        this.loader = false;
      }
    });
  }

  login() {
    this.loader = true;
  }
}
