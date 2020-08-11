import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { ClassService } from "src/app/store/class/api/class.service";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store/app.state";

@Component({
  selector: "app-view-class",
  templateUrl: "./view-class.component.html",
  styleUrls: ["./view-class.component.css"],
})
export class ViewClassComponent implements OnInit {
  addClassForm: FormGroup;
  loader: boolean;

  classes = [];

  constructor(
    private classService: ClassService,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.fetchClasses();
  }

  fetchClasses(): void {
    this.store.select("classList").subscribe((response) => {
      this.classes = response;
    });
    // this.classService.getClasses().subscribe((response) => {
    //   this.classes = response;
    // });
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
