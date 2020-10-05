import { Action } from "@ngrx/store";
import { ProfileType } from "./types/profile.type";

export enum AuthActions {
  USER_LOGIN = "[User] User Login",
  FETCH_PROFILE = "[User] Fetch User",
  FETCHED_PROFILE = "[User] Fetched User",
  USER_LOGOUT = "[User] User Logout",
  CLEAR_PROFILE = "[User] Clear User",
}

export class UserLogin implements Action {
  readonly type = AuthActions.USER_LOGIN;
  constructor(public payload: any) {}
}

export class FetchProfile implements Action {
  readonly type = AuthActions.FETCH_PROFILE;
  constructor(public payload: any) {}
}

export class FetchedProfile implements Action {
  readonly type = AuthActions.FETCHED_PROFILE;
  constructor(public payload: any) {}
}

export class UserLogout implements Action {
  readonly type = AuthActions.USER_LOGOUT;
}

export class ClearProfile implements Action {
  readonly type = AuthActions.CLEAR_PROFILE;
}

export type AuthActionsUnion =
  | UserLogin
  | FetchProfile
  | FetchedProfile
  | ClearProfile
  | UserLogout;
