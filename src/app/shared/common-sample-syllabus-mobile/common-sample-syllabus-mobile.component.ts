import {
  Component,
  OnInit,
  ViewChild,
  Input,
  ElementRef,
  Output,
  EventEmitter,
} from "@angular/core";
import { Store } from "@ngrx/store";
import { FormGroup } from "@angular/forms";
import { addForm } from "../common.utils";
import { AppState } from "src/app/store/app.state";
import * as TopicActions from "../../store/topic/topic.actions";
import * as SyllabusActions from "../../store/syllabus-tranform/syllabus.actions";
import * as NotesActions from "../../store/notes/notes.actions";
import * as SamplePaperTransformActions from "../../store/sample-paper-transform/sample-paper-transform.actions";
import { SubjectService } from "../../store/subject/api/subject.service";
import { Router } from "@angular/router";
import { NotesListType } from '../../store/notes/types/notes.type';
import { SyllabusListType } from '../../store/syllabus-tranform/types/syllabus.type';
import { SamplePaperListType } from '../../store/sample-paper/types/sample-paper.type';


@Component({
  selector: "app-common-sample-syllabus-mobile",
  templateUrl: "./common-sample-syllabus-mobile.component.html",
  styleUrls: ["./common-sample-syllabus-mobile.component.css"],
})
export class CommonSampleSyllabusMobileComponent implements OnInit {
  @ViewChild("slider", { static: false }) slider: ElementRef;
  @ViewChild("display", { static: false }) display: ElementRef;
  @ViewChild("ic", { static: false }) ic: ElementRef;
  test: boolean;
  public hide: boolean = false;
  addForm: FormGroup;
  @Input() name: string;
  @Output() subjectsOfClassChildEvent = new EventEmitter();
  selectedClassDetails;
  selectedClassName: string;
  selectedClassId: number;
  resultForNotes: NotesListType[];  
  resultForSyllabus:SyllabusListType[];
  resultForSamperPaper:SamplePaperListType[];
  
  isAddSamplePaperFormOpen = false;
  
  viewValue: boolean = true;
  noteArray:NotesListType[];
  hasNote: boolean;  

  constructor(
    private store: Store<AppState>,
    private subjectService: SubjectService,
    private router: Router
  ) {
    this.addForm = addForm();
  }

  ngOnInit(): void {
    if (!this.getStatus()) {
      this.fetchSamplePaperTransform();
    } else {
      this.fetchSyllabusTransform();
    }
    this.fetchNotesList();
  }

  openSamplePaperForm() {
    this.isAddSamplePaperFormOpen = !this.isAddSamplePaperFormOpen;
  }

  getStatus(): boolean {
    return this.name === "Sample Paper" ? false : true;
  }

  selectClass(classId, className) {
    setTimeout(() => {
      this.hide = true;
    }, 1000);
    this.selectedClassName = className;
    this.selectedClassId = classId;
    if (this.getStatus() && this.resultForSyllabus !== undefined)
      this.selectedClassDetails = this.resultForSyllabus.filter(
        (data) => data.class_id === classId
      );
    else if (this.resultForSamperPaper !== undefined)
      this.selectedClassDetails = this.resultForSamperPaper.filter(
        (data) => data.class_id === classId
      );
  }

  fetchSyllabusTransform(): void {
    this.store.select("syllabusList").subscribe((response) => {
      if (Object.keys(response).length) {
        this.resultForSyllabus = response;
        this.selectClass(
          this.resultForSyllabus[0].class_id,
          this.resultForSyllabus[0].class_name
        );
      } else {
        this.store.dispatch(new SyllabusActions.FetchSyllabus());
      }
    });
  }

  fetchSamplePaperTransform(): void {
    this.store.select("samplePaperTransformList").subscribe((response) => {
      if (Object.keys(response).length) {
        this.resultForSamperPaper = response;
        this.selectClass(
          this.resultForSamperPaper[0].class_id,
          this.resultForSamperPaper[0].class_name
        );
      } else {
        this.store.dispatch(
          new SamplePaperTransformActions.FetchTransformSamplePaper()
        );
      }
    });
  }

  unassignSubject(subjectId) {
    this.subjectService
      .unAssignSubjectToClass({ subjectId, classId: this.selectedClassId })
      .subscribe((response) => {
        if (response["status"]) {
          alert(response["message"]);
        } else {
          alert(response["message"]);
        }
      });
  }

  removeTopic(topic_id) {
    if (confirm("Are You Sure You want to Delete the Topic?")) {
      this.store.dispatch(new TopicActions.DeleteTopic(topic_id));
    }
  }

  close() {
    setTimeout(() => {
      this.hide = true;
      this.slider.nativeElement.classList.remove("show");
    }, 1000);

    this.display.nativeElement.classList.remove("animate");
    setTimeout(() => {
      this.test = !this.test;
    }, 1000);
    this.ic.nativeElement.classList.remove("showbtn");
  }

  slide() {
    setTimeout(() => {
      this.hide = !this.hide;
    }, 1000);
    this.ic.nativeElement.classList.remove("showbtn");
    this.slider.nativeElement.classList.toggle("show");
    setTimeout(() => {
      this.display.nativeElement.classList.toggle("animate");
      this.test = !this.test;
    }, 1000);

    if (this.slider.nativeElement.classList.contains("show")) {
      setTimeout(() => {
        this.ic.nativeElement.classList.add("showbtn");
      }, 1000);
    }
  }

   fetchNotesList() {
    this.store.select("notesList").subscribe((response) => {
      if (Object.keys(response).length) {
        this.resultForNotes = response;
      } else {
        this.store.dispatch(new NotesActions.FetchNotes());
      }
    });
  }

  addNotes(subject_id, subject_name, topic_id, topic_name) {
    this.router.navigate(["admin/notes"], {
      queryParams: {
        classId: this.selectedClassId,
        className: this.selectedClassName,
        subjectId: subject_id,
        subjectName: subject_name,
        topicId: topic_id,
        topicName: topic_name,
        view: !this.viewValue,
      },
    });
  }

  viewNotes(subject_name, topic_id, topic_name) {
    this.router.navigate(["admin/notes"], {
      queryParams: {
        className: this.selectedClassName,
        subjectName: subject_name,
        topicId: topic_id,
        topicName: topic_name,
        view: this.viewValue,
      },
    });
  }

  sortNotesByTopic( topicId): void {
    this.noteArray = this.resultForNotes.filter((data) => data.topic_id == topicId);
    if (this.noteArray.length < 1) 
      this.hasNote = false;
     else 
      this.hasNote = true;
    
  }
}
