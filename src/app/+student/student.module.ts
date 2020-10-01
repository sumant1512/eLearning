import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { StudentRoutingModule } from "./student-routing.module";
import { StudentComponent } from "./student.component";
import { StudentHeaderComponent } from "./student-header/student-header.component";
import { StudentFooterComponent } from "./student-footer/student-footer.component";
import { StudentLandingPageComponent } from "./student-landing-page/student-landing-page.component";
import { SharedModule } from "../shared/shared.module";
import { StudentSyllabusComponent } from "./student-syllabus/student-syllabus.component";
import { StudentSamplePaperComponent } from "./student-sample-paper/student-sample-paper.component";
import { StudentProfileComponent } from "./student-profile/student-profile.component";
import { ViewNotesComponent } from "./view-notes/view-notes.component";

@NgModule({
  declarations: [
    StudentComponent,
    StudentHeaderComponent,
    StudentFooterComponent,
    StudentLandingPageComponent,
    StudentSyllabusComponent,
    StudentSamplePaperComponent,
    StudentProfileComponent,
    ViewNotesComponent,
  ],
  imports: [CommonModule, StudentRoutingModule, SharedModule],
})
export class StudentModule {}
