import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
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
      console.log(data);
      this.expandvideo(0);
    }
  }
  selectedVideo: number;
  constructor(private Activatedroute: ActivatedRoute) {}

  ngOnInit() {}

  expandvideo(index: number) {
    this.selectedVideo = index;
  }
}
