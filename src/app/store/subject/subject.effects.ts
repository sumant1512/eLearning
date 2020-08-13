import { Actions, Effect, ofType } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import {
  SubjectActionsUnion,
  SubjectActions,
  FetchSubject,
  FetchedSubject,
  FetchUnAssignedClass,
  FetchedUnAssignedClass,
} from "./subject.actions";
import { mergeMap, map } from "rxjs/operators";
import { SubjectService } from "./api/subject.service";

@Injectable()
export class SubjectEffects {
  constructor(
    private action$: Actions<SubjectActionsUnion>,
    private subjectService: SubjectService
  ) {}

  @Effect()
  addSubject$ = this.action$.pipe(
    ofType(SubjectActions.ADD_SUBJECT),
    map((action) => {
      return this.subjectService.addSubject(action.payload);
    }),
    mergeMap((response) => {
      return response.pipe(
        map(() => {
          return new FetchSubject();
        })
      );
    })
  );

  @Effect()
  editSubject$ = this.action$.pipe(
    ofType(SubjectActions.EDIT_SUBJECT),
    map((action) => {
      return this.subjectService.editSubjectName(action.payload);
    }),
    mergeMap((response) => {
      return response.pipe(
        map(() => {
          return new FetchSubject();
        })
      );
    })
  );

  @Effect()
  deleteSubject$ = this.action$.pipe(
    ofType(SubjectActions.DELETE_SUBJECT),
    map((action) => {
      return this.subjectService.removeSubject(action.payload);
    }),
    mergeMap((response) => {
      return response.pipe(
        map(() => {
          return new FetchSubject();
        })
      );
    })
  );

  @Effect()
  assignSubject$ = this.action$.pipe(
    ofType(SubjectActions.ASSIGN_SUBJECT),
    map((action) => {
      return this.subjectService.assignSubjectToClass(action.payload);
    }),
    mergeMap((response) => {
      return response.pipe(
        map((action) => {
          return new FetchUnAssignedClass(action.payload);
        })
      );
    })
  );

  @Effect()
  fetchSubjects$ = this.action$.pipe(
    ofType(SubjectActions.FETCH_SUBJECT),
    map(() => {
      return this.subjectService.getSubjects();
    }),
    mergeMap((response) => {
      return response.pipe(
        map((res) => {
          return new FetchedSubject(res);
        })
      );
    })
  );
  @Effect()
  fetchUnAssignedClasses$ = this.action$.pipe(
    ofType(SubjectActions.FETCH_UNASSIGNED_CLASSES),
    map((action) => {
      return this.subjectService.getClassesOfUnassignedSubjects(action.payload);
    }),
    mergeMap((response) => {
      return response.pipe(
        map((res) => {
          return new FetchedUnAssignedClass(res);
        })
      );
    })
  );
}
