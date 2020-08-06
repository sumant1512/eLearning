import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AdminRoutingModule } from "./admin-routing.module";
import { AdminComponent } from "./admin.component";
import { ProfileComponent } from "./profile/profile.component";
import { AdminHeaderComponent } from "./admin-header/admin-header.component";
import { AdminFooterComponent } from "./admin-footer/admin-footer.component";
import { AddStudentComponent } from "./student/add-student.component";
import { AddTeacherComponent } from "./teacher/add-teacher.component";
import { ViewStudentComponent } from "./student/view-student/view-student.component";
import { ViewTeacherComponent } from "./teacher/view-teacher/view-teacher.component";
import { AddClassComponent } from "./class/add-class.component";
import { AddSubjectComponent } from "./subject/add-subject.component";
import { AddTopicComponent } from "./topic/add-topic.component";
import { AddSamplePaperComponent } from "./sample-paper/add-sample-paper.component";
import { ViewSamplePaperComponent } from "./sample-paper/view-sample-paper/view-sample-paper.component";
import { ViewClassComponent } from "./class/view-class/view-class.component";
import { ViewSubjectComponent } from "./subject/view-subject/view-subject.component";
import { ViewSyllabusComponent } from "./view-syllabus/view-syllabus.component";
import { AdminSettingsComponent } from "./admin-settings/admin-settings.component";
import { AdminLandingPageComponent } from "./admin-landing-page/admin-landing-page.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AdminComponent,
    ProfileComponent,
    AdminHeaderComponent,
    AdminFooterComponent,
    AddStudentComponent,
    AddTeacherComponent,
    ViewStudentComponent,
    ViewTeacherComponent,
    AddClassComponent,
    AddSubjectComponent,
    AddTopicComponent,
    AddSamplePaperComponent,
    ViewSamplePaperComponent,
    ViewClassComponent,
    ViewSubjectComponent,
    ViewSyllabusComponent,
    AdminSettingsComponent,
    AdminLandingPageComponent,
  ],
  imports: [CommonModule, AdminRoutingModule, ReactiveFormsModule],
})
export class AdminModule {}
