import { Actions, Effect, ofType } from "@ngrx/effects";
import { StudentService } from "./api/student.service";
import { Injectable } from "@angular/core";
import {
  StudentActionsUnion,
  StudentActions,
  FetchStudent,
  FetchedStudent,
} from "./student.actions";
import { mergeMap, map, tap } from "rxjs/operators";

@Injectable()
export class StudentEffects {
  constructor(
    private action$: Actions<StudentActionsUnion>,
    private studentService: StudentService
  ) {}

  @Effect()
  studentRegistration$ = this.action$.pipe(
    ofType(StudentActions.ADD_STUDENT),
    map((action) => {
      return this.studentService.studentRegistration(action.payload);
    }),
    mergeMap((response) => {
      return response.pipe(
        map((res) => {
          return new FetchStudent();
        })
      );
    })
  );

  @Effect()
  fetchStudent$ = this.action$.pipe(
    ofType(StudentActions.FETCH_STUDENT),
    map((action) => {
      const authToken = localStorage.getItem("AUTH_TOKEN");
      return this.studentService.studentFromSchool(authToken);
    }),
    mergeMap((response) => {
      return response.pipe(
        map((res) => {
          return new FetchedStudent(res);
        })
      );
    })
  );
}
