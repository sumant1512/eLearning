import { createSelector, MemoizedSelector } from "@ngrx/store";
import { AppState } from "../app.state";

export const fetchProfile = (state: AppState) => state.profile;

export const userType: MemoizedSelector<AppState, String> = createSelector(
  fetchProfile,
  (state) => {
    if (state) {
      return state.userDetails.user_type;
    }
  }
);
