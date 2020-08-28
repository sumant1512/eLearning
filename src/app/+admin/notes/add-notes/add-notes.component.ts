import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-add-notes",
  templateUrl: "./add-notes.component.html",
  styleUrls: ["./add-notes.component.css"],
})
export class AddNotesComponent implements OnInit {
  addnotes: FormGroup;
  submitted:false;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.addnotes = this.fb.group({
      heading: ["", Validators.required],
      description: ["", Validators.required],
    });
  }
}
