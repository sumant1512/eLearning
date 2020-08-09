import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RoutesEnum } from "./routing.constants";
import { AdminComponent } from "./+admin/admin.component";
import { AddClassComponent } from "./+admin/class/add-class/add-class.component";
import { AddSubjectComponent } from "./+admin/subject/add-subject.component";
import { ProfileRoutesEnum } from "./+admin/admin-routes.constants";
import { ProfileComponent } from "./+admin/profile/profile.component";
import { AddStudentComponent } from "./+admin/student/add-student.component";
import { AddTeacherComponent } from "./+admin/teacher/add-teacher.component";
import { AddTopicComponent } from "./+admin/topic/add-topic.component";
import { ViewSyllabusComponent } from "./+admin/view-syllabus/view-syllabus.component";
import { AddSamplePaperComponent } from "./+admin/sample-paper/add-sample-paper.component";
import { AdminSettingsComponent } from "./+admin/admin-settings/admin-settings.component";
import { AdminLandingPageComponent } from "./+admin/admin-landing-page/admin-landing-page.component";
import { PrivacyPolicyComponent } from "./shared/privacy-policy/privacy-policy.component";

const routes: Routes = [
  { path: "", redirectTo: RoutesEnum.HOME, pathMatch: "full" },
  {
    path: RoutesEnum.HOME,
    loadChildren: () => import("./+home/home.module").then((m) => m.HomeModule),
  },
  {
    path: RoutesEnum.REGISTRATION,
    loadChildren: () =>
      import("./+registration/registration.module").then(
        (m) => m.RegistrationModule
      ),
  },
  {
    path: RoutesEnum.VERIFICATION,
    loadChildren: () =>
      import("./+school-verification/school-verification.module").then(
        (m) => m.SchoolVerificationModule
      ),
  },
  {
    path: RoutesEnum.ADMIN,
    loadChildren: () =>
      import("./+admin/admin.module").then((m) => m.AdminModule),
  },
  // {
  //   path: RoutesEnum.PRIVACY_POLICY,
  //   component: PrivacyPolicyComponent,
  // },
  { path: "**", redirectTo: RoutesEnum.HOME, pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
