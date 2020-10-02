import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  HostListener,
  OnDestroy,
} from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store/app.state";
import * as ClassActions from "../../store/class/class.actions";
import { ClassListType } from "src/app/store/class/types/class.type";
import { Subscription } from "rxjs";

@Component({
  selector: "app-class",
  templateUrl: "./class.component.html",
  styleUrls: ["./class.component.css"],
})
export class ClassComponent implements OnInit, OnDestroy {
  @ViewChild("slider", { static: false }) slider: ElementRef;
  classList: ClassListType[];
  isMobile = false;
  isTablet;
  isSliderOpen = false;
  isAddClassFormOpen;
  subsctiption: Subscription = new Subscription();

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
    this.fetchClassList();
  }

  openAddClassForm() {
    this.isAddClassFormOpen = true;
  }

  fetchClassList(): void {
    this.store.dispatch(new ClassActions.FetchClass());
    this.subsctiption.add(
      this.store.select("classList").subscribe((response) => {
        if (Object.keys(response).length) {
          this.classList = response;
        }
      })
    );
  }

  addClass(name): void {
    this.store.dispatch(new ClassActions.AddClass({ className: name }));
    setTimeout(() => {
      this.sliderOpen();
    }, 1000);
  }

  removeClass(class_id): void {
    if (confirm("Are You Sure You want to Delete the Class?")) {
      this.store.dispatch(new ClassActions.DeleteClass(class_id));
    }
  }

  editClass(editDetails): void {
    this.store.dispatch(
      new ClassActions.EditClass({
        classId: editDetails.id,
        className: editDetails.updatedName,
      })
    );
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
    this.subsctiption.unsubscribe();
  }
}
