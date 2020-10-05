import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Router } from "@angular/router";

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
  @Output() public navigateToBackEvent = new EventEmitter();
  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigateToBack(): void {
    this.navigateToBackEvent.emit(true);
  }
}
