import { AppState } from "../app.state";
import { createSelector } from "@ngrx/store";

export const fetchProfile = (state: AppState) => state.profile;
