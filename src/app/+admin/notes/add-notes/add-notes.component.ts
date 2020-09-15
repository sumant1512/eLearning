import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";

import * as NotesActions from "../../../store/notes/notes.actions";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store/app.state";

@Component({
  selector: "app-add-notes",
  templateUrl: "./add-notes.component.html",
  styleUrls: ["./add-notes.component.css"],
})
export class AddNotesComponent implements OnInit {
  addNotesForm: FormGroup;
  classId:number;
  className:string;
  subjectId:number;
  subjectName:string;
  topicId:number;
  topicName: string;
  
  constructor(
    private store: Store<AppState>,
    private fb: FormBuilder,
    private Activatedroute: ActivatedRoute,
    private router: Router
  ) {
    this.addNotesForm = this.fb.group({
      noteHeading: ["", Validators.required],
      noteDesc: ["", Validators.required],
    });
  }

  ngOnInit() {
    this.Activatedroute.queryParams.subscribe((params) => {
      this.classId = params["classId"];
      this.className = params["className"];
      this.subjectId = params["subjectId"];
      this.subjectName = params["subjectName"];
      this.topicId = params["topicId"];
      this.topicName = params["topicName"];
    });
  }
  get f() {
    return this.addNotesForm.controls;
  }
  addNotes(): void {
    const notes = this.addNotesForm.value;
    this.store.dispatch(
      new NotesActions.AddNotes({
        noteHeading: notes.noteHeading,
        noteDesc: notes.noteDesc,
        classId: this.classId,
        subjectId: this.subjectId,
        topicId: this.topicId,
      })
    );
  }

  goToViewNote() {
    this.router.navigate(["admin/notes"], {
      queryParams: {
        className: this.className,
        subjectName: this.subjectName,
        topicId: this.topicId,
        topicName: this.topicName,
        view: true,
      },
    });
  }
}
