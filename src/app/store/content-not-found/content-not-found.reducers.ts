import {
  ContentNotFoundActions,
  ContentNotFoundActionsUnion,
} from "./content-not-found.actions";

const isContentNotFound: boolean = false;

export function contentNotFoundReducer(
  state = isContentNotFound,
  action: ContentNotFoundActionsUnion
): any {
  switch (action.type) {
    case ContentNotFoundActions.SET_CONTENT_NOT_FOUND_FLAG:
      return action.payload;
    default:
      return state;
  }
}
