import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  HostListener,
  OnDestroy,
} from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store/app.state";
import * as ClassActions from "../../store/class/class.actions";
import * as TopicActions from "../../store/topic/topic.actions";
import { ClassListType } from "src/app/store/class/types/class.type";
import { TopicListType } from "src/app/store/topic/types/topic.type";
import { SubjectListType } from "src/app/store/subject/types/subject.type";
import { Subscription } from "rxjs";

@Component({
  selector: "app-topic",
  templateUrl: "./topic.component.html",
  styleUrls: ["./topic.component.css"],
})
export class TopicComponent implements OnInit, OnDestroy {
  @ViewChild("slider", { static: false }) slider: ElementRef;
  addTopicForm: FormGroup;
  topicList: TopicListType[];
  classList: ClassListType[];
  isSliderOpen = false;
  isMobile = false;
  isAddClassFormOpen: boolean = false;
  isContentFound: boolean = true;
  subscription: Subscription = new Subscription();

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
    this.fetchTopics();
  }

  openAddClassForm() {
    this.isAddClassFormOpen = true;
  }

  // function to get content not found status
  isContentAvailable(): void {
    this.subscription.add(
      this.store.select("isContentFound").subscribe((response) => {
        this.isContentFound = response;
      })
    );
  }

  fetchTopics(): void {
    this.store.dispatch(new TopicActions.FetchTopic());
    this.store.select("topicList").subscribe((response) => {
      if (Object.keys(response).length) {
        this.topicList = response;
      } else {
        this.isContentAvailable();
      }
    });
  }

  addTopic(topic): void {
    this.store.dispatch(new TopicActions.AddTopic(topic));
    setTimeout(() => {
      this.sliderOpen();
    }, 1000);
  }

  editTopic(editDetails): void {
    this.store.dispatch(
      new TopicActions.EditTopic({
        topicId: editDetails.id,
        topicName: editDetails.updatedName,
      })
    );
  }

  removeTopic(topic_id): void {
    if (confirm("Are You Sure You want to Delete the Topic?")) {
      this.store.dispatch(new TopicActions.DeleteTopic(topic_id));
    }
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
