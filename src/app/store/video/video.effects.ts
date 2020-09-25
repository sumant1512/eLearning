import { Actions, Effect, ofType } from "@ngrx/effects";
import { VideoService } from "./api/video.service";
import { Injectable } from "@angular/core";
import {
  VideoActionsUnion,
  VideoActions,
  FetchVideo,
  FetchedVideo,
} from "./video.actions";
import { mergeMap, map } from "rxjs/operators";

@Injectable()
export class VideoEffects {
  constructor(
    private action$: Actions<VideoActionsUnion>,
    private videoService: VideoService
  ) {}

  @Effect()
  addVideo$ = this.action$.pipe(
    ofType(VideoActions.ADD_VIDEO),
    map((action) => {
      return this.videoService.saveVideo(action.payload);
    }),
    mergeMap((response) => {
      return response.pipe(
        map(() => {
          return new FetchVideo();
        })
      );
    })
  );

  @Effect()
  fetchVideo$ = this.action$.pipe(
    ofType(VideoActions.FETCH_VIDEO),
    map(() => {
      return this.videoService.getVideo(); 
    }),
    mergeMap((response) => {
      return response.pipe(
        map((res) => {
          return new FetchedVideo(res);
        })
      );
    })
  );
}
