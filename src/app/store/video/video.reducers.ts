import { VideoActions, VideoActionsUnion } from "./video.actions";
import { VideoListType } from "./types/video.type";

const videoList: VideoListType[]=[];

export function videoReducer(
  state = videoList,
  action: VideoActionsUnion
): VideoListType[] {
  switch (action.type) {
    case VideoActions.FETCHED_VIDEO:
      return action.payload;
    default:
      return state; 
  }
}
