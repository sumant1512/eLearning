import { Component, OnInit } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Subscription } from "rxjs";
import { AppState } from "src/app/store/app.state";
import { ClassListType } from "src/app/store/class/types/class.type";
import * as TeacherActions from "src/app/store/teacher/teacher.actions";
import * as SubjectActions from "../../../store/subject/subject.actions";
import * as ClassActions from "../../../store/class/class.actions";
import * as SyllabusActions from "../../../store/syllabus-tranform/syllabus.actions";
import {
  AssingedClassSubjectList,
  TeacherType,
} from "src/app/store/teacher/types/teacher.types";
import { fetchUnassingedClass } from "src/app/store/class/class.selectors";
import {
  assingedClassSubjectList,
  teacherList,
} from "src/app/store/teacher/teacher.selectors";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { tagSubjectForm } from "./view-teacher-utils";
import { SubjectListType } from "src/app/store/subject/types/subject.type";
import { fetchSubjectList } from "src/app/store/syllabus-tranform/syllabus.selectors";
import { TeacherService } from "src/app/store/teacher/api/teacher.service";

@Component({
  selector: "app-view-teacher",
  templateUrl: "./view-teacher.component.html",
  styleUrls: ["./view-teacher.component.css"],
})
export class ViewTeacherComponent implements OnInit {
  tagSubjectForm: FormGroup;
  teachers: TeacherType[];
  classList: ClassListType[];
  subjectList: SubjectListType[] = [];
  teacherName: string;
  teacherId: number;
  selectedTeacherId: number;
  unAssingedSubjectList: AssingedClassSubjectList[];
  assingedClassSubjectList: AssingedClassSubjectList[];
  transformedSyllabus: any;
  subscription: Subscription = new Subscription();
  constructor(
    private store: Store<AppState>,
    private teacherService: TeacherService
  ) {
    this.tagSubjectForm = tagSubjectForm();
  }

  ngOnInit(): void {
    this.fetchTeachers();
    this.fetchSyllabusTransform();
  }

  fetchTeachers(): void {
    this.store.dispatch(new TeacherActions.FetchTeacher());
    this.subscription.add(
      this.store.pipe(select(teacherList)).subscribe((response) => {
        if (response.length) {
          this.teachers = response;
        }
      })
    );
  }

  fetchSyllabusTransform(): void {
    this.store.dispatch(new SyllabusActions.FetchSyllabus());
    this.store.select("syllabusList").subscribe((response) => {
      if (Object.keys(response).length) {
        this.transformedSyllabus = response;
      }
    });
  }

  fetchAssingedClassSubjects(): void {
    this.subscription.add(
      this.store
        .pipe(select(assingedClassSubjectList))
        .subscribe((response) => {
          if (response.length) {
            this.assingedClassSubjectList = response;
            console.log(this.assingedClassSubjectList);
          }
        })
    );
  }

  removeTeacher(teacher_id): void {
    if (confirm("Are You Sure You want to Delete the Teacher?")) {
      this.store.dispatch(new TeacherActions.DeleteTeacher(teacher_id));
    }
  }

  // function to emit details for assigning class
  selectTeacher(teacherId): void {
    this.selectedTeacherId = teacherId;
    this.tagSubjectForm.patchValue({
      teacherId: teacherId,
    });
  }

  getSubjectsForClass(classId) {
    this.store.pipe(select(fetchSubjectList(classId))).subscribe((response) => {
      if (response) {
        this.subjectList = response;
        this.tagSubjectForm.addControl(
          "subjectId",
          new FormControl("", Validators.required)
        );
      }
    });
  }

  tagSubjectToTeacher(): void {
    const subjectDetails = this.tagSubjectForm.value;
    this.store.dispatch(new TeacherActions.TagSubjectToTeacher(subjectDetails));
  }

  getUnAssingedClassList() {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
