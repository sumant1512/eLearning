import { Actions, Effect, ofType } from "@ngrx/effects";
import { StudentSamplePaperSyllabusService } from "./api/student-sample_paper-syllabus.service";
import { Injectable } from "@angular/core";
import {
 StudentSamplePaperSyllabusActionsUnion,
  StudentSamplePaperSyllabusActions,
  FetchedStudentSamplePaperSyllabus,
} from "./student-sample_paper-syllabus.actions";
import { mergeMap, map } from "rxjs/operators";

@Injectable()
export class StudentSamplePaperSyllabusEffects { 
  constructor(
    private action$: Actions<StudentSamplePaperSyllabusActionsUnion>,
    private studenttransformService:StudentSamplePaperSyllabusService
  ) {}


  @Effect()
  fetchData$ = this.action$.pipe(
    ofType(StudentSamplePaperSyllabusActions.FETCH_SAMPLE_PAPER_SYLLABUS_STUDENT),
    map((action) => {       
      return this.studenttransformService.getTransformedDataForStudent(action.payload);  
    }),
    mergeMap((response) => {
      return response.pipe(
        map((res) => {
          return new FetchedStudentSamplePaperSyllabus(res);
        }) 
      );
    })
  );
}
