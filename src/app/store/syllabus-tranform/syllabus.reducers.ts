import { SyllabusActions, SyllabusActionsUnion } from "./syllabus.actions";


const syllabusList: any[] = [];

export function syllabusReducer(
  state = syllabusList,
  action: SyllabusActionsUnion
): any[] {
  switch (action.type) {
    case SyllabusActions.FETCHED_SYLLABUS:
      return action.payload;
    default:
      return state;
  }
}
