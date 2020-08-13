import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { AppState } from "src/app/store/app.state";
import * as SubjectActions from "../../store/subject/subject.actions";
import { Store } from "@ngrx/store";
import { SubjectListType } from "src/app/store/subject/types/subject.type";

@Component({
  selector: "app-subject",
  templateUrl: "./subject.component.html",
  styleUrls: ["./subject.component.css"],
})
export class SubjectComponent implements OnInit {
  @ViewChild("slider", { static: false }) slider: ElementRef;
  isAddClassMobile = false;
  isAddClassFormOpen = false;

  subjectList: SubjectListType[];

  openAddClassForm() {
    this.isAddClassFormOpen = true;
  }
  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    if (window.innerWidth < 1024) {
      this.isAddClassMobile = true;
    }
    window.onresize = () => {
      this.isAddClassMobile = window.innerWidth < 1024;
      this.isAddClassFormOpen = false;
    };
    this.fetchSubjects();
  }

  fetchSubjects(): void {
    this.store.select("subjectList").subscribe((response) => {
      if (Object.keys(response).length) {
        this.subjectList = response;
      } else {
        this.store.dispatch(new SubjectActions.FetchSubject());
      }
    });
  }
  addSubject(name): void {
    this.store.dispatch(new SubjectActions.AddSubject({ subjectName: name }));
  }
  editSubject(editDetails): void {
    this.store.dispatch(
      new SubjectActions.EditSubject({
        subjectId: editDetails.id,
        subjectName: editDetails.newName,
      })
    );
  }
  getClassesofSubject(subjectDetails): void {
    console.log(subjectDetails);
  }
  removeSubject(subject_id): void {
    if (confirm("Are You Sure You want to Delete the Subject?")) {
      this.store.dispatch(new SubjectActions.DeleteSubject(subject_id));
    }
  }
  sliderOpen() {
    this.slider.nativeElement.classList.toggle("show");
  }
}
