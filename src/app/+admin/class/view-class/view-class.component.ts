import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { ClassService } from "src/app/store/class/api/class.service";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store/app.state";
import * as ClassActions from "../../../store/class/class.actions";

@Component({
  selector: "app-view-class",
  templateUrl: "./view-class.component.html",
  styleUrls: ["./view-class.component.css"],
})
export class ViewClassComponent implements OnInit {
  addClassForm: FormGroup;
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
      if (Object.keys(response).length) {
        this.classes = response;
      } else {
        this.store.dispatch(new ClassActions.FetchClass());
      }
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
