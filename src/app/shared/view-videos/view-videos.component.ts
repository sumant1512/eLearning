import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store/app.state";
import { VideoListType } from "src/app/store/video/types/video.type";
import * as VideoActions from "../../store/video/video.actions";

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
    private Activatedroute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getQueryParams();
  }

  getQueryParams(): void {
    this.Activatedroute.queryParams.subscribe((params) => {
      this.selectedTopic = params["topicId"];
    });
    this.fetchVideos();
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
}
