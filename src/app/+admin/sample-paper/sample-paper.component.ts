import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  HostListener,
} from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store/app.state";
import * as SamplePaperActions from "../../store/sample-paper/sample-paper.actions";
import { SamplePaperListType } from "src/app/store/sample-paper/types/sample-paper.type";
import * as ClassActions from "../../store/class/class.actions";
import * as ClassWithSubjectActions from "../../store/class-with-subject/class-with-subject.actions";
import { ClassListType } from "src/app/store/class/types/class.type";
import { SubjectListType } from "src/app/store/subject/types/subject.type";
import { ClassWithSubjectListType } from "src/app/store/class-with-subject/types/class-with-subject.type";
@Component({
  selector: "app-sample-paper",
  templateUrl: "./sample-paper.component.html",
  styleUrls: ["./sample-paper.component.css"],
})
export class SamplePaperComponent implements OnInit {
  @ViewChild("slider", { static: false }) slider: ElementRef;
  isMobile = false;
  isAddClassFormOpen = false;
  classList: ClassListType[];
  subjectList: SubjectListType[];
  classWithSubjectList: ClassWithSubjectListType[];
  samplePaperList: SamplePaperListType[];

  constructor(private store: Store<AppState>) {}

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
    this.fetchsamplePaperList();
    this.fetchClassList();
    //this.fetchClassWithSubject();
  }
  openAddClassForm() {
    this.isAddClassFormOpen = true;
  }

  fetchsamplePaperList(): void {
    this.store.select("samplePaperList").subscribe((response) => {
      if (Object.keys(response).length) {
        this.samplePaperList = response;
      } else {
        this.store.dispatch(new SamplePaperActions.FetchSamplePaper());
      }
    });
  }

  fetchClassList(): void {
    this.store.select("classList").subscribe((response) => {
      if (Object.keys(response).length) {
        this.classList = response;
      } else {
        this.store.dispatch(new ClassActions.FetchClass());
      }
    });
  }

  fetchClassWithSubject() {
    this.store.select("classWithSubjectList").subscribe((response) => {
      if (Object.keys(response).length) {
        this.classWithSubjectList = response;
      } else {
        this.store.dispatch(
          new ClassWithSubjectActions.FetchClassWithSubject()
        );
      }
    });
  }

  addSamplePaper(samplePaperDetails): void {
    this.store.dispatch(
      new SamplePaperActions.AddSamplePaper(samplePaperDetails)
    );
  }

  editSamplePaper(Details): void {
    this.store.dispatch(
      new SamplePaperActions.EditSamplePaper({
        samplePaperId: Details.id,
        samplePaperName: Details.updatedName,
      })
    );
  }

  removeSamplePaper(sample_paper_id): void {
    if (confirm("Are You Sure You want to Delete the Sample Paper?")) {
      this.store.dispatch(
        new SamplePaperActions.DeleteSamplePaper(sample_paper_id)
      );
    }
  }
  getSubjects(classId): void {}

  sliderOpen() {
    this.slider.nativeElement.classList.toggle("show");
  }

  formToggle(action) {
    if (action === "open") {
      this.slider.nativeElement.classList.add("show");
    } else {
      this.slider.nativeElement.classList.remove("show");
    }
  }
}
