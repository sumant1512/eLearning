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
  isStudent: boolean = true;
  @Output() public childEvent = new EventEmitter();
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.checkUser();
  }
  checkUser(): void {
    const userType = localStorage.getItem("user_type");
    if (userType === "Admin") {
      this.isStudent = false;
    }
  }
  close(): void {
    this.childEvent.emit(false);
  }
  goBack(): void {
    this.router.navigateByUrl("admin/syllabus");
  }
}
