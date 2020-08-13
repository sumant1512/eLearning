import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminComponent } from "./admin.component";
import { ProfileComponent } from "./profile/profile.component";
import { AddStudentComponent } from "./student/add-student.component";
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
import { ViewSaplePaperComponent } from "./view-saple-paper/view-saple-paper.component";
import { SettingsComponent } from "./settings/settings.component";
import { ConferencingComponent } from "./conferencing/conferencing.component";
const routes: Routes = [
  {
    path: "",
    component: AdminComponent,
    children: [
      { path: "", component: AdminLandingPageComponent },
      { path: ProfileRoutesEnum.PROFILE, component: ProfileComponent },
      { path: ProfileRoutesEnum.STUDENT, component: AddStudentComponent },
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
        component: ViewSaplePaperComponent,
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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
