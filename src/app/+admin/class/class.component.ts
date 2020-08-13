import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store/app.state";
import * as ClassActions from "../../store/class/class.actions";
import { ClassListType } from "src/app/store/class/types/class.type";

@Component({
  selector: "app-class",
  templateUrl: "./class.component.html",
  styleUrls: ["./class.component.css"],
})
export class ClassComponent implements OnInit {
  @ViewChild("slider", { static: false }) slider: ElementRef;
  isAddClassMobile = false;
  isAddClassFormOpen = false;
  classList: ClassListType[];
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
    this.fetchClassList();
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

  sliderOpen() {
    this.slider.nativeElement.classList.toggle("show");
  }
}
