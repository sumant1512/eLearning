import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminComponent } from "./admin.component";
import { ProfileComponent } from "./profile/profile.component";
import { AddTeacherComponent } from "./teacher/add-teacher.component";
import { TopicComponent } from "./topic/topic.component";
import { ViewSyllabusComponent } from "./view-syllabus/view-syllabus.component";
import { AdminSettingsComponent } from "./admin-settings/admin-settings.component";
import { ProfileRoutesEnum } from "./admin-routes.constants";
import { AdminLandingPageComponent } from "./admin-landing-page/admin-landing-page.component";
import { PrivacyPolicyComponent } from "../shared/privacy-policy/privacy-policy.component";
import { ClassComponent } from "./class/class.component";
import { SamplePaperComponent } from "./sample-paper/sample-paper.component";
import { SubjectComponent } from "./subject/subject.component";
import { ViewSamplePaperComponent } from "./view-sample-paper/view-sample-paper.component";
import { SettingsComponent } from "./settings/settings.component";
import { ConferencingComponent } from "./conferencing/conferencing.component";
import { NotesComponent } from "./notes/notes.component";
import { VideoComponent } from "./video/video.component";
import { StudentListComponent } from "./student-list/student-list.component";
const routes: Routes = [
  {
    path: "",
    component: AdminComponent,
    children: [
      { path: "", component: AdminLandingPageComponent },
      { path: ProfileRoutesEnum.PROFILE, component: ProfileComponent },
      { path: ProfileRoutesEnum.STUDENT, component: StudentListComponent },
      { path: ProfileRoutesEnum.TEACHER, component: AddTeacherComponent },
      { path: ProfileRoutesEnum.CLASS, component: ClassComponent },
      { path: ProfileRoutesEnum.SUBJECT, component: SubjectComponent },
      { path: ProfileRoutesEnum.TOPIC, component: TopicComponent },
      { path: ProfileRoutesEnum.SYLLABUS, component: ViewSyllabusComponent },
      {
        path: ProfileRoutesEnum.SAMPLE_PAPER,
        component: SamplePaperComponent,
      },
      {
        path: ProfileRoutesEnum.VIEW_SAMPLE_PAPER,
        component: ViewSamplePaperComponent,
      },
      {
        path: ProfileRoutesEnum.SETTINGS,
        component: SettingsComponent,
      },
      { path: ProfileRoutesEnum.SETTINGS, component: AdminSettingsComponent },
      {
        path: ProfileRoutesEnum.PRIVACY_POLICY,
        component: PrivacyPolicyComponent,
      },
      {
        path: ProfileRoutesEnum.CONFERENCING,
        component: ConferencingComponent,
      },
      {
        path: ProfileRoutesEnum.VIDEO,
        component: VideoComponent,
      },
      {
        path: ProfileRoutesEnum.NOTES,
        component: NotesComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
