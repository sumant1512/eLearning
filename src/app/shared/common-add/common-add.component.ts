import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  HostListener,
} from "@angular/core";
import { FormGroup } from "@angular/forms";
import { addForm } from "../common.utils";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store/app.state";
import * as ClassActions from "../../store/class/class.actions";
import { TopicService } from "src/app/store/topic/api/topic.service";
import { ClassListType } from "src/app/store/class/types/class.type";
@Component({
  selector: "app-common-add",
  templateUrl: "./common-add.component.html",
  styleUrls: ["./common-add.component.css"],
})
export class CommonAddComponent implements OnInit {
  classList: ClassListType[];
  @Input() name: string;
  @Output() childEvent = new EventEmitter();
  @Output() touchEvent = new EventEmitter();
  addForm: FormGroup;
  loader = false;
  selectedClassId: number;
  selectedSubjectId: number;
  subjectList: any;

  defaultTouch = { x: 0, y: 0, time: 0 };

  @HostListener("touchstart", ["$event"])
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
            this.touchEvent.emit("close");
          } else {
            this.touchEvent.emit("open");
          }
        }
      }
    }
  }

  constructor(
    private store: Store<AppState>,
    private topicService: TopicService
  ) {
    this.addForm = addForm();
  }

  ngOnInit() {
    this.getStatus();
    if (!this.reviewStatus()) {
      this.fetchClassList();
    }
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

  getClassForSubject(classId) {
    this.topicService.getSubjectsOfClass({ classId }).subscribe((response) => {
      if (response.length) {
        this.subjectList = response;
      }
    });
  }

  reviewStatus(): boolean {
    if (this.name === "Topic" || this.name === "Sample Paper") return false;
    return true;
  }
  getStatus(): boolean {
    return this.name === "Sample Paper" ? false : true;
  }

  add(): void {
    this.loader = true;
    if ("Topic" === this.name)
      this.childEvent.emit({
        topicName: this.addForm.value.itemName,
        classId: this.selectedClassId,
        subjectId: this.selectedSubjectId,
      });
    else if ("Sample Paper" === this.name) {
      this.childEvent.emit({
        samplePaperName: this.addForm.value.itemName,
        samplePaperUrl: (<HTMLInputElement>document.getElementById("itemUrl"))
          .value,
        classId: this.selectedClassId,
        subjectId: this.selectedSubjectId,
      });
    } else this.childEvent.emit(this.addForm.value.itemName);
  }

  selectedClass(id) {
    this.selectedClassId = id;
    this.getClassForSubject(id);
  }

  selectedSubject(id) {
    this.selectedSubjectId = id;
  }
}
