import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";
import { SubjectsOfTopicAndSamplePapertype } from "src/app/shared/accordion/types/accordion.type";
import { AppState } from "src/app/store/app.state";

@Component({
  selector: "app-view-notes",
  templateUrl: "./view-notes.component.html",
  styleUrls: ["./view-notes.component.css"],
})
export class ViewNotesComponent implements OnInit {
  noteHeading: string;
  noteDescription: string;
  subjectName;
  topicId;
  topicName;
  constructor(
    private Activatedroute: ActivatedRoute,
    private store: Store<AppState>,
    private _location: Location
  ) {}

  ngOnInit() {
    this.Activatedroute.queryParams.subscribe((params) => {
      this.subjectName = params["subjectName"];
      this.topicId = params["topicId"];
      this.topicName = params["topicName"];
    });
    this.fetchStudentSamplePaperSyllabusData();
  }

  fetchStudentSamplePaperSyllabusData(): void {
    this.store
      .select("studentSamplePaperSyllabusList")
      .subscribe((response) => {
        if (Object.keys(response).length) {
          this.fetchNotes(response);
        }
      });
  }

  fetchNotes(
    studentSamplePaperSyllabusList: SubjectsOfTopicAndSamplePapertype[]
  ): void {
    studentSamplePaperSyllabusList.forEach((element) => {
      if (element.subject_name === this.subjectName) {
        element.topics.forEach((element1) => {
          if (element1.topic_id == this.topicId) {
            this.noteHeading = element1.notes[0].note_heading;
            this.noteDescription = element1.notes[0].note_desc;
          }
        });
      }
    });
  }

  back(event) {
    this._location.back();
  }
}
