import { Component, Input, OnInit } from "@angular/core";
import { VideoListType } from "src/app/store/video/types/video.type";

@Component({
  selector: "app-videos-panel",
  templateUrl: "./videos-panel.component.html",
  styleUrls: ["./videos-panel.component.css"],
})
export class VideosPanelComponent implements OnInit {
  @Input() videoList: VideoListType[];
  selectedVideo: number;
  constructor() {}

  ngOnInit() {}

  expandvideo(index: number) {
    this.selectedVideo = index;
  }
}
