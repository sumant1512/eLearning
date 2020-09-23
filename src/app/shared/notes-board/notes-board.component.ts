import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-notes-board",
  templateUrl: "./notes-board.component.html",
  styleUrls: ["./notes-board.component.css"],
})
export class NotesBoardComponent implements OnInit {
  @Input() noteDescription: string;
  @Input() noteHeading: string;
  @Input() className: string;
  @Input() subjectName: string;
  @Input() topicName: string;
  loaded: boolean;

  constructor() {}

  ngOnInit(): void {}
}
