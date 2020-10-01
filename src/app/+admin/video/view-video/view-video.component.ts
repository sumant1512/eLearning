import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store/app.state";
import * as VideoActions from "../../../store/video/video.actions";
import { VideoListType } from "src/app/store/video/types/video.type";

@Component({
  selector: "app-view-video",
  templateUrl: "./view-video.component.html",
  styleUrls: ["./view-video.component.css"],
})
export class ViewVideoComponent implements OnInit {
  selectedTopic: number;
  videos: VideoListType[];

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
          (data) => data.topic_id == this.selectedTopic
        );
      }
    });
  }
}
