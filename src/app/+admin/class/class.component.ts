import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  HostListener,
} from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store/app.state";
import * as ClassActions from "../../store/class/class.actions";
import { ClassListType } from "src/app/store/class/types/class.type";
import { WindowServiceService } from "src/app/store/services/window-service.service";

@Component({
  selector: "app-class",
  templateUrl: "./class.component.html",
  styleUrls: ["./class.component.css"],
})
export class ClassComponent implements OnInit {
  @ViewChild("slider", { static: false }) slider: ElementRef;
  classList: ClassListType[];
  isMobile = false;
  isTablet;
  isAddClassFormOpen;

  constructor(
    private store: Store<AppState>,
    private windowService: WindowServiceService
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
    this.fetchClassList();
  }

  openAddClassForm() {
    this.isAddClassFormOpen = true;
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
    this.slider.nativeElement.classList.toggle("show");
  }
}
