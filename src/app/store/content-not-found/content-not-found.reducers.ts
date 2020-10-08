import {
  ContentNotFoundActions,
  ContentNotFoundActionsUnion,
} from "./content-not-found.actions";

const isContentFound: boolean = false;

export function contentNotFoundReducer(
  state = isContentFound,
  action: ContentNotFoundActionsUnion
): any {
  switch (action.type) {
    case ContentNotFoundActions.SET_CONTENT_NOT_FOUND_FLAG:
      return action.payload;
    default:
      return state;
  }
}
