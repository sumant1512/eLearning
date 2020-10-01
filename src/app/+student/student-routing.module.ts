import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { StudentComponent } from "./student.component";
import { StudentLandingPageComponent } from "./student-landing-page/student-landing-page.component";
import { StudentRoutesEnum } from "./student-routes.constants";
import { StudentSyllabusComponent } from "./student-syllabus/student-syllabus.component";
import { StudentSamplePaperComponent } from "./student-sample-paper/student-sample-paper.component";
import { StudentProfileComponent } from "./student-profile/student-profile.component";
import { ViewNotesComponent } from "../+student/view-notes/view-notes.component";
import { ViewVideosComponent } from "./view-videos/view-videos.component";

const routes: Routes = [
  {
    path: "",
    component: StudentComponent,
    children: [
      { path: "", component: StudentLandingPageComponent },
      {
        path: StudentRoutesEnum.PROFILE,
        component: StudentProfileComponent,
      },
      { path: StudentRoutesEnum.SYLLABUS, component: StudentSyllabusComponent },
      {
        path: StudentRoutesEnum.VIEW_SAMPLE_PAPER,
        component: StudentSamplePaperComponent,
      },
      {
        path: StudentRoutesEnum.NOTES,
        component: ViewNotesComponent,
      },
      {
        path: StudentRoutesEnum.VIDEOS,
        component: ViewVideosComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentRoutingModule {}
