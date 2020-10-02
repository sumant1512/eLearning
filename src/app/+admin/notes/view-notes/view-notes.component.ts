import { Component, OnDestroy, OnInit } from "@angular/core";
import { Location } from "@angular/common";
import { Store } from "@ngrx/store";
import { ActivatedRoute, Router } from "@angular/router";
import { AppState } from "src/app/store/app.state";
import * as NotesActions from "../../../store/notes/notes.actions";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { NotesListType } from "src/app/store/notes/types/notes.type";
import { Subscription } from "rxjs";

@Component({
  selector: "app-view-notes",
  templateUrl: "./view-notes.component.html",
  styleUrls: ["./view-notes.component.css"],
})
export class ViewNotesComponent implements OnInit, OnDestroy {
  editNotesForm: FormGroup;
  classId: number;
  topicId: number;
  noteArray: NotesListType[];
  resultForNotes: NotesListType[];
  loaded: boolean = false;
  className: string;
  subjectName: string;
  topicName: string;
  heading: string;
  description: string;
  hasNoNote: boolean = true;
  subsctiption: Subscription = new Subscription();
  constructor(
    private store: Store<AppState>,
    private fb: FormBuilder,
    private Activatedroute: ActivatedRoute,
    private _location: Location
  ) {
    this.editNotesForm = this.fb.group({
      noteHeading: ["", Validators.required],
      noteDesc: ["", Validators.required],
    });
  }

  ngOnInit(): void {
    this.Activatedroute.queryParams.subscribe((params) => {
      this.className = params["className"];
      this.subjectName = params["subjectName"];
      this.topicId = params["topicId"];
      this.topicName = params["topicName"];
    });
    this.fetchNotesList();
  }

  get f() {
    return this.editNotesForm.controls;
  }

  fetchNotesList(): void {
    this.store.dispatch(new NotesActions.FetchNotes());
    this.subsctiption.add(
      this.store.select("notesList").subscribe((response) => {
        if (Object.keys(response).length) {
          this.resultForNotes = response;
          this.fetchNotes();
        }
      })
    );
  }

  fetchNotes(): void {
    this.noteArray = this.resultForNotes.filter(
      (data) => data.topic_id == this.topicId
    );
    if (this.noteArray.length == 1) {
      this.heading = this.noteArray[0].note_heading;
      this.description = this.noteArray[0].note_desc;
      this.loaded = true;
    }
  }

  updateNotes(): void {
    const notes = this.editNotesForm.value;
    this.store.dispatch(
      new NotesActions.EditNotes({
        noteHeading: notes.noteHeading,
        noteDesc: notes.noteDesc,
        noteId: this.noteArray[0].note_id,
      })
    );
  }

  deleteNotes(): void {
    if (confirm("Are You Sure You want to Delete the note?")) {
      this.store.dispatch(
        new NotesActions.DeleteNotes(this.noteArray[0].note_id)
      );
      this.navigateToBack(true);
    }
  }

  navigateToBack(event: boolean): void {
    this._location.back();
  }

  ngOnDestroy(): void {
    this.subsctiption.unsubscribe();
  }
}
