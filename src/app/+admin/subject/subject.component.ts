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

  defaultTouch = { x: 0, y: 0, time: 0 };

  @HostListener("touchstart", ["$event"])
  //@HostListener('touchmove', ['$event'])
  @HostListener("touchend", ["$event"])
  @HostListener("touchcancel", ["$event"])
  handleTouch(event) {
    let touch = event.touches[0] || event.changedTouches[0];

    // check the events
    if (event.type === "touchstart") {
      this.defaultTouch.y = touch.pageY;
      this.defaultTouch.time = event.timeStamp;
    } else if (event.type === "touchend") {
      let deltaY = touch.pageY - this.defaultTouch.y;
      let deltaTime = event.timeStamp - this.defaultTouch.time;

      // simulte a swipe -> less than 500 ms and more than 60 px
      if (deltaTime < 500) {
        if (Math.abs(deltaY) > 60) {
          // delta y is at least 60 pixels
          if (deltaY > 0) {
            this.slider.nativeElement.classList.add("show");
          } else {
            this.slider.nativeElement.classList.remove("show");
          }
        }
      }
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
