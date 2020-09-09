import { Actions, Effect, ofType } from "@ngrx/effects";
import { StudentTransformService } from "./api/student-transform.service";
import { Injectable } from "@angular/core";
import {
 StudentTransformActionsUnion,
  StudentTransformActions,
  FetchedTransformStudent,
} from "./student-transform.actions";
import { mergeMap, map } from "rxjs/operators";

@Injectable()
export class StudentTransformEffects { 
  constructor(
    private action$: Actions<StudentTransformActionsUnion>,
    private studenttransformService:StudentTransformService
  ) {}


  @Effect()
  fetchData$ = this.action$.pipe(
    ofType(StudentTransformActions.FETCH_TRANSFORMED_STUDENT),
    map((action) => {       
      return this.studenttransformService.getTransformedDataForStudent(action.payload);  
    }),
    mergeMap((response) => {
      return response.pipe(
        map((res) => {
          return new FetchedTransformStudent(res);
        }) 
      );
    })
  );
}
