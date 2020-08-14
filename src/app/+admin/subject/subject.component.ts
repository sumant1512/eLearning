import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  HostListener,
} from "@angular/core";
import { AppState } from "src/app/store/app.state";
import { Store } from "@ngrx/store";
import * as SubjectActions from "../../store/subject/subject.actions";
import { SubjectListType } from "src/app/store/subject/types/subject.type";
import { SubjectService } from "src/app/store/subject/api/subject.service";

@Component({
  selector: "app-subject",
  templateUrl: "./subject.component.html",
  styleUrls: ["./subject.component.css"],
})
export class SubjectComponent implements OnInit {
  @ViewChild("slider", { static: false }) slider: ElementRef;
  subjectList: SubjectListType[];
  isMobile = false;
  isAddClassFormOpen = false;

  constructor(
    private store: Store<AppState>,
    private subjectService: SubjectService
  ) {}

  @HostListener("window:resize", ["$event"])
  onResize(event) {
    if (event.target.innerWidth < 991) {
      this.isMobile = true;
    } else {
      this.isMobile = false;
    }
  }

  ngOnInit() {
    this.isMobile = window.innerWidth < 991 ? true : false;
    this.fetchSubjects();
  }

  openAddClassForm() {
    this.isAddClassFormOpen = true;
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
    setTimeout(() => {
      this.sliderOpen();
    }, 1000);
  }

  removeSubject(subject_id): void {
    if (confirm("Are You Sure You want to Delete the Subject?")) {
      this.store.dispatch(new SubjectActions.DeleteSubject(subject_id));
    }
  }

  // for edit subject name
  editSubject(editDetails): void {
    this.store.dispatch(
      new SubjectActions.EditSubject({
        subjectId: editDetails.id,
        subjectName: editDetails.updatedName,
      })
    );
  }

  // function to get unassign classes for subject, ******* in future it will be moved to store
  getClassesofSubject(subjectDetails): void {
    this.subjectService
      .assignSubjectToClass(subjectDetails)
      .subscribe((response) => {
        if (response["status"]) {
          alert("subject assinged");
        } else {
          alert("Error");
        }
      });
  }

  sliderOpen() {
    this.slider.nativeElement.classList.toggle("show");
  }
}
