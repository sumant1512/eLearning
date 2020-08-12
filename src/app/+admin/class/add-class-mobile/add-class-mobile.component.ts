import { Component } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store/app.state";
import * as ClassActions from "src/app/store/class/class.actions";
import { addClassForm } from "../add-class.utils";

@Component({
  selector: "app-add-class-mobile",
  templateUrl: "./add-class-mobile.component.html",
  styleUrls: ["./add-class-mobile.component.css"],
})
export class AddClassMobileComponent {
  addClassForm: FormGroup;
  loader: boolean;
  constructor(private store: Store<AppState>) {
    this.addClassForm = addClassForm();
  }

  addClass(): void {
    this.loader = true;
    const classDetails = this.addClassForm.value;
    this.store.dispatch(new ClassActions.AddClass(classDetails));
  }

  login() {
    this.loader = true;
  }
}
