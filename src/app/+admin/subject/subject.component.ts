import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  HostListener,
  OnDestroy,
} from "@angular/core";
import { AppState } from "src/app/store/app.state";
import { Store } from "@ngrx/store";
import * as SubjectActions from "../../store/subject/subject.actions";
import { SubjectListType } from "src/app/store/subject/types/subject.type";
import { SubjectService } from "src/app/store/subject/api/subject.service";
import { Subscription } from "rxjs";
import { Router } from "@angular/router";

@Component({
  selector: "app-subject",
  templateUrl: "./subject.component.html",
  styleUrls: ["./subject.component.css"],
})
export class SubjectComponent implements OnInit, OnDestroy {
  @ViewChild("slider", { static: false }) slider: ElementRef;
  subjectList: SubjectListType[];
  isMobile = false;
  isSliderOpen = false;
  isAddClassFormOpen = false;
  subscription: Subscription = new Subscription();

  constructor(
    private store: Store<AppState>,
    private subjectService: SubjectService,
    private router: Router
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
    this.store.dispatch(new SubjectActions.FetchSubject());
    this.subscription.add(
      this.store.select("subjectList").subscribe((response) => {
        if (Object.keys(response).length) {
          this.subjectList = response;
        }
      })
    );
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

  // function to assign subject to class,
  assignSubjectToClass(subjectDetails): void {
    this.store.dispatch(new SubjectActions.AssignSubject(subjectDetails));
    setTimeout(() => {
      this.router.navigateByUrl("/admin/syllabus");
    }, 1000);
  }

  sliderOpen() {
    this.isSliderOpen = true;
    var element = this.slider.nativeElement.classList.toggle("show");

    var icon = document.getElementById("favIcon");
    if (icon.classList.contains("fa-angle-double-up")) {
      icon.classList.remove("fa-angle-double-up");
      icon.classList.add("fa-angle-double-down");
    } else {
      icon.classList.remove("fa-angle-double-down");
      icon.classList.add("fa-angle-double-up");
    }
  }

  formToggle(action) {
    if (action === "open") {
      this.slider.nativeElement.classList.add("show");
    } else {
      this.slider.nativeElement.classList.remove("show");
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
