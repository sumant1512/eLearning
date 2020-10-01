import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store/app.state";
import { VideoListType } from "src/app/store/video/types/video.type";
import * as VideoActions from "../../store/video/video.actions";
import * as AuthActions from "../../store/auth/auth.actions";

@Component({
  selector: "app-view-videos",
  templateUrl: "./view-videos.component.html",
  styleUrls: ["./view-videos.component.css"],
})
export class ViewVideosComponent implements OnInit {
  videos: VideoListType[];
  selectedTopic: string;
  constructor(
    private store: Store<AppState>,
    private Activatedroute: ActivatedRoute,
    private _location: Location
  ) {}

  ngOnInit() {
    this.getQueryParams();
    this.getUserProfile();
  }

  getQueryParams(): void {
    this.Activatedroute.queryParams.subscribe((params) => {
      this.selectedTopic = params["topicId"];
    });
  }

  getUserProfile(): void {
    this.store.select("profile").subscribe((response) => {
      if (!response.userDetails.user_id) {
        this.fetchUserProfile();
      } else {
        this.fetchVideos();
      }
    });
  }

  fetchUserProfile(): void {
    const authToken = localStorage.getItem("AUTH_TOKEN");
    this.store.dispatch(new AuthActions.FetchProfile(authToken));
  }

  fetchVideos(): void {
    this.store.dispatch(new VideoActions.FetchVideo());
    this.store.select("videoList").subscribe((response) => {
      if (Object.keys(response).length) {
        this.videos = response.filter(
          (data) => data.topic_id.toString() === this.selectedTopic
        );
      }
    });
  }

  removeVideo(id: number): void {
    if (confirm("Are You Sure You want to Delete the Video?")) {
      this.store.dispatch(new VideoActions.DeleteVideo(id));
    }
  }

  back() {
    this._location.back();
  }
}
