import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { SelectedClassDetailsType } from "src/app/shared/accordion/types/accordion.type";
import { AppState } from "src/app/store/app.state";
import * as StudentSamplePaperSyllabusActions from "../../store/student-sample_paper-syllabus/student-sample_paper-syllabus.actions";

@Component({
  selector: "app-student-syllabus",
  templateUrl: "./student-syllabus.component.html",
  styleUrls: ["./student-syllabus.component.css"],
})
export class StudentSyllabusComponent implements OnInit {
  selectedClassDetails: SelectedClassDetailsType[];
  name = "Syllabus";
  noteHeading: string;
  noteDescription: string;
  constructor(private store: Store<AppState>, private router: Router) {}

  ngOnInit() {
    this.getUserProfile();
  }

  getUserProfile(): void {
    this.store.select("profile").subscribe((response) => {
      if (response.userDetails.user_id !== null) {
        this.fetchStudentSamplePaperSyllabusData(response.userDetails);
      }
    });
  }

  fetchStudentSamplePaperSyllabusData(res): void {
    const requestParams = {
      schoolId: res.user_id,
      classId: res.class_id,
    };
    this.store.dispatch(
      new StudentSamplePaperSyllabusActions.FetchStudentSamplePaperSyllabus(
        requestParams
      )
    );
    this.store
      .select("studentSamplePaperSyllabusList")
      .subscribe((response) => {
        if (Object.keys(response).length) {
          this.selectedClassDetails = [
            {
              class_id: res.class_id,
              class_name: res.class_name,
              subjects: response,
            },
          ];
        }
      });
  }

  navigateToNotes(notes) {
    this.router.navigate(["student/notes"], {
      queryParams: {
        subjectName: notes.subjectName,
        topicId: notes.topicId,
        topicName: notes.topicName,
      },
    });
  }

  navigateToVideos(videos) {
    this.router.navigate(["student/videos"], {
      queryParams: {
        topicId: videos,
      },
    });
  }
}
