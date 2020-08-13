import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { AdminRoutingModule } from "./admin-routing.module";
import { AdminComponent } from "./admin.component";
import { ProfileComponent } from "./profile/profile.component";
import { AdminHeaderComponent } from "./admin-header/admin-header.component";
import { AdminFooterComponent } from "./admin-footer/admin-footer.component";
import { AddStudentComponent } from "./student/add-student.component";
import { AddTeacherComponent } from "./teacher/add-teacher.component";
import { ViewStudentComponent } from "./student/view-student/view-student.component";
import { ViewTeacherComponent } from "./teacher/view-teacher/view-teacher.component";
import { ViewSamplePaperComponent } from "./sample-paper/view-sample-paper/view-sample-paper.component";
import { ViewSyllabusComponent } from "./view-syllabus/view-syllabus.component";
import { AdminSettingsComponent } from "./admin-settings/admin-settings.component";
import { AdminLandingPageComponent } from "./admin-landing-page/admin-landing-page.component";
import { ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { ClassComponent } from "./class/class.component";
import { TopicComponent } from "./topic/topic.component";
import { SamplePaperComponent } from "./sample-paper/sample-paper.component";
import { AddSamplePaperMobileComponent } from "./sample-paper/add-sample-paper-mobile/add-sample-paper-mobile.component";
import { AddSamplePaperComponent } from "./sample-paper/add-sample-paper/add-sample-paper.component";
import { SubjectComponent } from "./subject/subject.component";

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
    ClassComponent,
    ViewSamplePaperComponent,
    ViewSyllabusComponent,
    AdminSettingsComponent,
    AdminLandingPageComponent,
    TopicComponent,
    SamplePaperComponent,
    AddSamplePaperComponent,
    AddSamplePaperMobileComponent,
    SubjectComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    FormsModule,
  ],
})
export class AdminModule {}
