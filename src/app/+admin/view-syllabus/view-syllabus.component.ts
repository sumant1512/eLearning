import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import * as ClassActions from "../../store/class/class.actions";
import * as ClassWithSubjectActions from "../../store/class-with-subject/class-with-subject.actions";
import * as TopicWithClassSubjectActions from "../../store/topic-with-class-subject/topic-with-class-subject.actions";
import { AppState } from "src/app/store/app.state";
import { ClassWithSubjectListType } from "src/app/store/class-with-subject/types/class-with-subject.type";
import { ClassListType } from "src/app/store/class/types/class.type";
import { TopicWithClassSubjectListType } from "src/app/store/topic-with-class-subject/types/topic-with-class-subject.type";

@Component({
  selector: "app-view-syllabus",
  templateUrl: "./view-syllabus.component.html",
  styleUrls: ["./view-syllabus.component.css"],
})
export class ViewSyllabusComponent implements OnInit {
  classWithSubjectList: ClassWithSubjectListType[];
  topicWithClassSubjectList: TopicWithClassSubjectListType[];
  classList: ClassListType[];
  constructor(private store: Store<AppState>) {}
  ngOnInit(): void {
    this.fetchClassList();
    this.fetchClassWithSubject();
    this.fetchTopicWithClassSubject();
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

  fetchTopicWithClassSubject() {
    this.store.select("topicWithClassSubjectList").subscribe((response) => {
      if (Object.keys(response).length) {
        this.topicWithClassSubjectList = response;
      } else {
        this.store.dispatch(
          new TopicWithClassSubjectActions.FetchTopicWithClassSubject()
        );
      }
    });
  }

  selectedSubjects;
  classnamewithid;
  selectClass(selectedClass) {
    this.classnamewithid = this.classList.filter(
      (classes) => classes.class_id === selectedClass
    ); // to get the class name and class ID of selected class

    this.selectedSubjects = this.topicWithClassSubjectList.filter(
      (topic) => topic.class_id === selectedClass
    ); // to filter out class with same id

    const groups = this.selectedSubjects.reduce((acc, cur) => {
      (acc[cur.subject_id] = acc[cur.subject_id] || []).push(cur.topic_name);
      return acc;
    }, {}); // to group the array according to subject

    this.selectedSubjects = Object.keys(groups).map((key) => ({
      subject_name: key,
      topics: groups[key],
    }));
  }
}
