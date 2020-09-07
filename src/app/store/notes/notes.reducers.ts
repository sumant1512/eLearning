import { NotesActions, NotesActionsUnion } from "./notes.actions";
import { NotesListType } from "./types/notes.type";

const notesList: NotesListType[] = [];

export function notesReducer(
  state = notesList,
  action: NotesActionsUnion
): NotesListType[] {
  switch (action.type) {
    case NotesActions.FETCHED_NOTES:
      return action.payload;
    default:
      return state;
  }
}
