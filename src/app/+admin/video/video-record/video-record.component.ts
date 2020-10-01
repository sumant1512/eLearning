import {
  Component,
  ViewChild,
  AfterViewInit,
  ElementRef,
  OnInit,
} from "@angular/core";
import * as RecordRTC from "recordrtc";
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store/app.state";
import * as VideoActions from "../../../store/video/video.actions";
import { FormGroup } from "@angular/forms";
import { addVideoForm } from "./add-video,utils";

@Component({
  selector: "app-video-record",
  templateUrl: "./video-record.component.html",
  styleUrls: ["./video-record.component.css"],
})
export class VideoRecordComponent implements AfterViewInit, OnInit {
  @ViewChild("video", { static: false }) video: ElementRef;
  addVideoForm: FormGroup;
  private stream = new MediaStream();
  private recordRTC: any;
  toggle: boolean = false;
  toggleDownload: boolean = true;
  classId: number;
  topicId: number;
  encryptedVideo: string;
  constructor(
    private store: Store<AppState>,
    private Activatedroute: ActivatedRoute
  ) {
    this.addVideoForm = addVideoForm();
  }

  ngOnInit(): void {
    this.readQueryParams();
  }

  readQueryParams(): void {
    this.Activatedroute.queryParams.subscribe((params) => {
      this.classId = params["classId"];
      this.topicId = params["topicId"];
    });
  }

  ngAfterViewInit(): void {
    // set the initial state of the video
    let video: HTMLVideoElement = this.video.nativeElement;
    video.muted = false;
    video.controls = true;
    video.autoplay = false;
  }

  toggleControls() {
    let video: HTMLVideoElement = this.video.nativeElement;
    video.muted = !video.muted;
    video.controls = !video.controls;
    video.autoplay = !video.autoplay;
  }

  successCallback(stream: MediaStream) {
    this.stream = stream;
    this.recordRTC = RecordRTC(stream, {
      type: "video",
    });
    this.recordRTC.startRecording();
    let video: HTMLVideoElement = this.video.nativeElement;
    video.srcObject = this.stream;
    this.toggleControls();
  }

  errorCallback() {
    alert("Something gets wrong.!! Video not recorded");
  }

  processVideo(audioVideoWebMURL) {
    let video: HTMLVideoElement = this.video.nativeElement;
    let recordRTC = this.recordRTC;
    video.src = audioVideoWebMURL;
    this.toggleControls();
    let recordedBlob = recordRTC.getBlob();
    video.srcObject = recordRTC.getDataURL(() => recordedBlob);
    recordRTC = null;
  }

  startRecording() {
    this.toggle = true;
    this.toggleDownload = true;
    navigator.mediaDevices
      .getUserMedia({
        video: { width: 530, height: 200 },
        audio: true,
      })
      .then(this.successCallback.bind(this), this.errorCallback.bind(this));
  }

  stopRecording() {
    this.toggle = false;
    this.toggleDownload = false;
    let recordRTC = this.recordRTC;
    recordRTC.stopRecording(this.processVideo.bind(this));
    let stream = this.stream;
    stream.getAudioTracks().forEach((track) => track.stop());
    stream.getVideoTracks().forEach((track) => track.stop());
  }

  download(): void {
    this.recordRTC.save("video.mp4");
  }

  saveVideo(videoType: string): void {
    let data: any;
    if (videoType === "upload") {
      data = {
        classId: this.classId,
        topicId: this.topicId,
        media: this.encryptedVideo,
      };
      this.store.dispatch(new VideoActions.AddVideo(data));
    } else {
      this.recordRTC.getDataURL((dataUrl) => {
        data = {
          classId: this.classId,
          topicId: this.topicId,
          media: dataUrl,
        };
        this.store.dispatch(new VideoActions.AddVideo(data));
      });
    }
  }

  onVideoSelect(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.encryptedVideo = event.target.result;
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  uploadVideo() {
    this.saveVideo("upload");
  }
}
