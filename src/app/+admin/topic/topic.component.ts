import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store/app.state";
import * as ClassActions from "../../store/class/class.actions";
import * as TopicActions from "../../store/topic/topic.actions";
import * as ClassWithSubjectActions from "../../store/class-with-subject/class-with-subject.actions";
import { ClassListType } from "src/app/store/class/types/class.type";
import { TopicListType } from "src/app/store/topic/types/topic.type";
import { FormGroup } from "@angular/forms";
import { SubjectListType } from "src/app/store/subject/types/subject.type";
import { ClassWithSubjectListType } from "src/app/store/class-with-subject/types/class-with-subject.type";

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
  subjectList: SubjectListType[];
  classWithSubjectList: ClassWithSubjectListType[];

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
    this.fetchClassList();
    this.fetchClassWithSubject();
  }

  fetchTopics(): void {
    this.store.select("topicList").subscribe((response) => {
      if (Object.keys(response).length) {
        this.topicList = response;
      } else {
        this.store.dispatch(new TopicActions.FetchTopic());
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
