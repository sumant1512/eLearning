import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { ActivatedRoute } from "@angular/router";
import { AppState } from "src/app/store/app.state";
import * as NotesActions from "../../../store/notes/notes.actions";

@Component({
  selector: "app-view-notes",
  templateUrl: "./view-notes.component.html",
  styleUrls: ["./view-notes.component.css"],
})
export class ViewNotesComponent implements OnInit {
  classId;
  subjectId;
  topicId;
  arr;
  resultForNotes;
  loaded: boolean = false;
  constructor(
    private store: Store<AppState>,
    private Activatedroute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.Activatedroute.queryParams.subscribe((params) => {
      this.classId = params["classId"];
      this.subjectId = params["subjectId"];
      this.topicId = params["topicId"];
    });
    this.fetchNotesList();
  }

  fetchNotesList() {
    this.store.select("notesList").subscribe((response) => {
      if (Object.keys(response).length) {
        this.resultForNotes = response;
        this.fetchNotes();
        this.loaded = true;
      } else {
        this.store.dispatch(new NotesActions.FetchNotes());
      }
    });
  }

  fetchNotes() {
    this.arr = this.resultForNotes.filter(
      (data) => data.class_id == this.classId
    );
    this.arr = this.arr.filter((data) => data.subject_id == this.subjectId);
    this.arr = this.arr.filter((data) => data.topic_id == this.topicId);
    console.log(this.arr);
  }
}
