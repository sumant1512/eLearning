import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store/app.state";
import * as ClassActions from "../../store/class/class.actions";
import { ClassListType } from "src/app/store/class/types/class.type";
import * as TopicActions from "../../store/topic/topic.actions";
import { TopicListType } from "src/app/store/topic/types/topic.type";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "app-topic",
  templateUrl: "./topic.component.html",
  styleUrls: ["./topic.component.css"],
})
export class TopicComponent implements OnInit {
  addTopicForm: FormGroup;

  @ViewChild("slider", { static: false }) slider: ElementRef;
  isAddClassMobile = false;
  isAddClassFormOpen = false;

  topicList: TopicListType[];
  classList: ClassListType[];
  subjectList;

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
    this.fetchTopics();
  }

  fetchTopics(): void {
    this.store.select("topicList").subscribe((response) => {
      if (Object.keys(response).length) {
        this.topicList = response;
      } else {
        this.store.dispatch(new TopicActions.FetchTopic());
      }
    });

    this.store.select("classList").subscribe((response) => {
      if (Object.keys(response).length) {
        this.classList = response;
      } else {
        this.store.dispatch(new ClassActions.FetchClass());
      }
    });
  }
  addTopic(topic): void {
    this.store.dispatch(new TopicActions.AddTopic(topic));
  }
  editTopic(editDetails): void {
    this.store.dispatch(
      new TopicActions.EditTopic({
        topicId: editDetails.id,
        topicName: editDetails.newName,
      })
    );
  }
  removeTopic(topic_id): void {
    if (confirm("Are You Sure You want to Delete the Topic?")) {
      this.store.dispatch(new TopicActions.DeleteTopic(topic_id));
    }
  }
  getSubjects(classId): void {
    console.log(classId);
  }

  sliderOpen() {
    this.slider.nativeElement.classList.toggle("show");
  }
}
