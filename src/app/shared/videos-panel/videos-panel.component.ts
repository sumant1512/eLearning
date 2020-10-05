import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { select, Store } from "@ngrx/store";
import { Subscription } from "rxjs";
import { AppState } from "src/app/store/app.state";
import { userType } from "src/app/store/auth/auth.selectors";
import { VideoListType } from "src/app/store/video/types/video.type";

@Component({
  selector: "app-videos-panel",
  templateUrl: "./videos-panel.component.html",
  styleUrls: ["./videos-panel.component.css"],
})
export class VideosPanelComponent implements OnInit {
  videoList: VideoListType[];
  loaded: boolean;
  @Input("videoList") set setvideoList(data: any) {
    if (data) {
      this.loaded = true;
      this.videoList = data;
      this.expandvideo(0);
    }
  }
  @Output() removeVideoId = new EventEmitter<number>();
  selectedVideo: number;
  subscription: Subscription = new Subscription();
  isAdmin: boolean;
  isStudent: boolean;
  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.getUserType();
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

  expandvideo(index: number) {
    this.selectedVideo = index;
  }

  removeVideoEmit(id: number) {
    this.removeVideoId.emit(id);
  }
}
