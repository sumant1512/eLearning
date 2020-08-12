import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { addClassForm } from "./add-class.utils";
import { ClassService } from "src/app/store/class/api/class.service";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store/app.state";
import * as ClassActions from "src/app/store/class/class.actions";

@Component({
  selector: "app-add-class",
  templateUrl: "./add-class.component.html",
  styleUrls: ["./add-class.component.css"],
})
export class AddClassComponent implements OnInit {
  addClassForm: FormGroup;
  isAddClassFormOpen = false;
  loader: boolean;
  constructor(private store: Store<AppState>) {
    this.addClassForm = addClassForm();
  }

  ngOnInit(): void {}

  addClass(): void {
    this.loader = true;
    const classDetails = this.addClassForm.value;
    this.store.dispatch(new ClassActions.AddClass(classDetails));
  }

  login() {
    this.loader = true;
  }
}
