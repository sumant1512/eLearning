import { Action } from "@ngrx/store";
import { ProfileType } from "./types/content-not-found.type";

export enum ContentNotFoundActions {
  SET_CONTENT_NOT_FOUND_FLAG = "[Content not found] Content not found flag set",
}

export class SetContentNotFoundFlag implements Action {
  readonly type = ContentNotFoundActions.SET_CONTENT_NOT_FOUND_FLAG;
  constructor(public payload: boolean) {}
}

export type ContentNotFoundActionsUnion = SetContentNotFoundFlag;
