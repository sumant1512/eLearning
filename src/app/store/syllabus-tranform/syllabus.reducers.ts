import { SyllabusActions, SyllabusActionsUnion } from "./syllabus.actions";
import { SyllabusListType } from './types/syllabus.type';


const syllabusList: SyllabusListType[] = [];

export function syllabusReducer(
  state = syllabusList,
  action: SyllabusActionsUnion
): SyllabusListType[] { 
  switch (action.type) {
    case SyllabusActions.FETCHED_SYLLABUS:
      return action.payload;
    default:
      return state;
  }
}
