import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Subscription } from "rxjs";
import { AppState } from "src/app/store/app.state";
import { userType } from "src/app/store/auth/auth.selectors";
import { SelectedClassDetailsType } from "./types/accordion.type";
import * as AuthActions from "../../store/auth/auth.actions";

@Component({
  selector: "app-accordion",
  templateUrl: "./accordion.component.html",
  styleUrls: ["./accordion.component.css"],
})
export class AccordionComponent implements OnInit {
  selectedClassDetails: SelectedClassDetailsType;
  loaded: boolean;
  @Input("selectedClassDetails") set setSelectedClassDetails(data: any) {
    if (data) {
      this.loaded = true;
      this.selectedClassDetails = data;
    }
  }
  @Input() name: string;
  @Input() selectedClassName: string;
  @Input() hasNote: boolean;
  @Output() removeChildEvent = new EventEmitter<number>();
  @Output() addNotesChildEvent = new EventEmitter();
  @Output() viewNotesChildEvent = new EventEmitter();
  @Output() sortByTopicChildEvent = new EventEmitter<number>();
  @Output() uploadVideoRecorderChildEvent = new EventEmitter<number>();
  @Output() viewVideoRecorderChildEvent = new EventEmitter<number>();
  @Output() unassignSubjectChildEvent = new EventEmitter<number>();
  subscription: Subscription = new Subscription();
  isAdmin: boolean;
  isStudent: boolean;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.getUserProfile();
  }

  getStatus(): boolean {
    return this.name === "Sample Paper" ? false : true;
  }

  getUserProfile(): void {
    this.subscription.add(
      this.store.select("profile").subscribe((response) => {
        if (!response.userDetails.user_id) {
          this.fetchUserProfile();
        } else {
          this.getUserType();
        }
      })
    );
  }

  fetchUserProfile(): void {
    const authToken = localStorage.getItem("AUTH_TOKEN");
    this.store.dispatch(new AuthActions.FetchProfile(authToken));
  }

  getUserType(): void {
    this.subscription.add(
      this.store.pipe(select(userType)).subscribe((response) => {
        if (response === "Admin") {
          this.isAdmin = true;
          this.isStudent = false;
        } else if (response === "Student") {
          this.isStudent = true;
          this.isAdmin = false;
        }
      })
    );
  }

  remove(topicId) {
    this.removeChildEvent.emit(topicId);
  }

  addNotesChild(subjectid, subjectname, topicid, topicname): void {
    let addNotesDetails = {
      subjectId: subjectid,
      subjectName: subjectname,
      topicId: topicid,
      topicName: topicname,
    };
    this.addNotesChildEvent.emit(addNotesDetails);
  }

  viewNotesChild(subjectname, topicid, topicname): void {
    let viewNotesDetails = {
      subjectName: subjectname,
      topicId: topicid,
      topicName: topicname,
    };
    this.viewNotesChildEvent.emit(viewNotesDetails);
  }

  sortByTopicChild(topicId) {
    this.sortByTopicChildEvent.emit(topicId);
  }

  navigateToVideoRecorderChild(topicId) {
    this.uploadVideoRecorderChildEvent.emit(topicId);
  }

  navigateToViewVideoChild(topicId) {
    this.viewVideoRecorderChildEvent.emit(topicId);
  }

  unassignSubjectChild(subjectId) {
    this.unassignSubjectChildEvent.emit(subjectId);
  }
}
