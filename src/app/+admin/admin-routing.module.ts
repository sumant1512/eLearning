import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminComponent } from "./admin.component";
import { ProfileComponent } from "./profile/profile.component";
import { AddStudentComponent } from "./student/add-student.component";
import { AddTeacherComponent } from "./teacher/add-teacher.component";
import { AddClassComponent } from "./class/add-class.component";
import { AddSubjectComponent } from "./subject/add-subject.component";
import { AddTopicComponent } from "./topic/add-topic.component";
import { ViewSyllabusComponent } from "./view-syllabus/view-syllabus.component";
import { AdminSettingsComponent } from "./admin-settings/admin-settings.component";
import { ProfileRoutesEnum } from "./admin-routes.constants";
import { AddSamplePaperComponent } from "./sample-paper/add-sample-paper.component";
import { AdminLandingPageComponent } from "./admin-landing-page/admin-landing-page.component";

const routes: Routes = [
  {
    path: "",
    component: AdminComponent,
    children: [
      { path: "", component: AdminLandingPageComponent },
      { path: ProfileRoutesEnum.PROFILE, component: ProfileComponent },
      { path: ProfileRoutesEnum.STUDENT, component: AddStudentComponent },
      { path: ProfileRoutesEnum.TEACHER, component: AddTeacherComponent },
      { path: ProfileRoutesEnum.CLASS, component: AddClassComponent },
      { path: ProfileRoutesEnum.SUBJECT, component: AddSubjectComponent },
      { path: ProfileRoutesEnum.TOPIC, component: AddTopicComponent },
      { path: ProfileRoutesEnum.SYLLABUS, component: ViewSyllabusComponent },
      {
        path: ProfileRoutesEnum.SAMPLE_PAPER,
        component: AddSamplePaperComponent,
      },
      { path: ProfileRoutesEnum.SETTINGS, component: AdminSettingsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
