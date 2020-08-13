import { Component, OnInit } from "@angular/core";
import { AppState } from "src/app/store/app.state";
import * as SubjectActions from "../../store/subject/subject.actions";
import { Store } from "@ngrx/store";

@Component({
  selector: "app-subject",
  templateUrl: "./subject.component.html",
  styleUrls: ["./subject.component.css"],
})
export class SubjectComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.fetchClasses();
  }

  fetchClasses(): void {
    this.store.select("subjectList").subscribe((response) => {
      if (Object.keys(response).length) {
        console.log(response);
      } else {
        this.store.dispatch(new SubjectActions.FetchSubject());
      }
    });
  }
}
