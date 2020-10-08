import { createSelector, MemoizedSelector } from "@ngrx/store";
import { AppState } from "../app.state";

export const fetchContentNotFound = (state: AppState) =>
  state.isContentNotFound;
