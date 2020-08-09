import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { ClassService } from "src/app/store/services/class.service";

@Component({
  selector: "app-view-class",
  templateUrl: "./view-class.component.html",
  styleUrls: ["./view-class.component.css"],
})
export class ViewClassComponent implements OnInit {
  addClassForm: FormGroup;
  loader: boolean;

  classes = [];

  constructor(private classService: ClassService) {}

  ngOnInit(): void {
    this.fetchClasses();
  }

  fetchClasses(): void {
    this.classService.getClasses().subscribe((response) => {
      this.classes = response;
    });
  }

  removeClass(class_id): void {
    this.classService.removeClass(class_id).subscribe((response) => {
      if (response["status"]) {
        alert(response["message"]);
      } else {
        alert(response["message"]);
      }
    });
  }
}
