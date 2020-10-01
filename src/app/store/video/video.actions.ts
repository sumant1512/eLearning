import { Action } from "@ngrx/store";
import { VideoListType } from "./types/video.type";

export enum VideoActions {
  ADD_VIDEO = "[Video] Add Video",
  FETCH_VIDEO = "[Video] Fetch Video",
  FETCHED_VIDEO = "[Video] Fetched Video",
  DELETE_VIDEO = "[Video] Delete Video",
}

export class AddVideo implements Action {
  readonly type = VideoActions.ADD_VIDEO;
  constructor(public payload: any) {}
}

export class FetchVideo implements Action {
  readonly type = VideoActions.FETCH_VIDEO;
}

export class FetchedVideo implements Action {
  readonly type = VideoActions.FETCHED_VIDEO;
  constructor(public payload: VideoListType[]) {}
}

export class DeleteVideo implements Action {
  readonly type = VideoActions.DELETE_VIDEO;
  constructor(public payload: any) {}
}

export type VideoActionsUnion =
  | AddVideo
  | FetchVideo
  | FetchedVideo
  | DeleteVideo;
