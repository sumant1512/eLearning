import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { AdminRoutingModule } from "./admin-routing.module";
import { AdminComponent } from "./admin.component";
import { ProfileComponent } from "./profile/profile.component";
import { AdminHeaderComponent } from "./admin-header/admin-header.component";
import { AdminFooterComponent } from "./admin-footer/admin-footer.component";
import { TeacherComponent } from "./teacher/teacher.component";
import { ViewTeacherComponent } from "./teacher/view-teacher/view-teacher.component";
import { ViewSyllabusComponent } from "./view-syllabus/view-syllabus.component";
import { AdminSettingsComponent } from "./admin-settings/admin-settings.component";
import { AdminLandingPageComponent } from "./admin-landing-page/admin-landing-page.component";
import { ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { ClassComponent } from "./class/class.component";
import { TopicComponent } from "./topic/topic.component";
import { SamplePaperComponent } from "./sample-paper/sample-paper.component";
import { SubjectComponent } from "./subject/subject.component";
import { ViewSamplePaperComponent } from "./view-sample-paper/view-sample-paper.component";
import { SettingsComponent } from "./settings/settings.component";
import { ConferencingComponent } from "./conferencing/conferencing.component";
import { NotesComponent } from "./notes/notes.component";
import { AddNotesComponent } from "./notes/add-notes/add-notes.component";
import { ViewNotesComponent } from "./notes/view-notes/view-notes.component";
import { SearchPipe } from "../shared/pipe/search.pipe";
import { VideoComponent } from "./video/video.component";
import { VideoRecordComponent } from "./video/video-record/video-record.component";
import { StudentListComponent } from "./student-list/student-list.component";
import { ViewStudentComponent } from "./student-list/view-student/view-student.component";
import { AddStudentComponent } from "./student-list/add-student/add-student.component";
import { AddTeacherComponent } from "./teacher/add-teacher/add-teacher.component";

@NgModule({
  declarations: [
    AdminComponent,
    ProfileComponent,
    AdminHeaderComponent,
    AdminFooterComponent,
    AddStudentComponent,
    TeacherComponent,
    ViewStudentComponent,
    ViewTeacherComponent,
    ClassComponent,
    ViewSyllabusComponent,
    AdminSettingsComponent,
    AdminLandingPageComponent,
    TopicComponent,
    SamplePaperComponent,
    SubjectComponent,
    ViewSamplePaperComponent,
    SettingsComponent,
    ConferencingComponent,
    VideoRecordComponent,
    NotesComponent,
    AddNotesComponent,
    ViewNotesComponent,
    SearchPipe,
    VideoComponent,
    StudentListComponent,
    AddTeacherComponent,
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
