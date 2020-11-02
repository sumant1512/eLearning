import { Actions, Effect, ofType } from "@ngrx/effects";
import { TeacherService } from "./api/teacher.service";
import { Injectable } from "@angular/core";
import {
  TeacherActionsUnion,
  TeacherActions,
  FetchTeacher,
  FetchedTeacher,
  FetchedTaggedSubjectToTeacher,
} from "./teacher.actions";
import { mergeMap, map, tap } from "rxjs/operators";

@Injectable()
export class TeacherEffects {
  constructor(
    private action$: Actions<TeacherActionsUnion>,
    private teacherService: TeacherService
  ) {}

  @Effect()
  teacherRegistration$ = this.action$.pipe(
    ofType(TeacherActions.ADD_TEACHER),
    map((action) => {
      return this.teacherService.teacherRegistration(action.payload);
    }),
    mergeMap((response) => {
      return response.pipe(
        map((res) => {
          return new FetchTeacher();
        })
      );
    })
  );

  @Effect()
  deleteTeacher$ = this.action$.pipe(
    ofType(TeacherActions.DELETE_TEACHER),
    map((action) => {
      return this.teacherService.removeTeacher(action.payload);
    }),
    mergeMap((response) => {
      return response.pipe(
        map(() => {
          return new FetchTeacher();
        })
      );
    })
  );

  @Effect()
  fetchTeacher$ = this.action$.pipe(
    ofType(TeacherActions.FETCH_TEACHER),
    map((action) => {
      return this.teacherService.teacherFromSchool();
    }),
    mergeMap((response) => {
      return response.pipe(
        map((res) => {
          return new FetchedTeacher(res);
        })
      );
    })
  );

  @Effect()
  fetchTaggedSubjectWithTeacher$ = this.action$.pipe(
    ofType(TeacherActions.FETCH_TAGGED_SUBJECT_TO_TEACHER),
    map((action) => {
      return this.teacherService.getTaggedSubjectWithTeacher();
    }),
    mergeMap((response) => {
      return response.pipe(
        map((res) => {
          return new FetchedTaggedSubjectToTeacher(res);
        })
      );
    })
  );

  @Effect()
  tagSubjectToTeacher$ = this.action$.pipe(
    ofType(TeacherActions.TAG_SUBJECT_TO_TEACHER),
    map((action) => {
      return this.teacherService.tagSubjectToTeacher(action.payload);
    }),
    mergeMap((response) => {
      return response.pipe(
        map((res) => {
          console.log(response);
        })
      );
    })
  );
}
