import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student.component';
import { StudentHeaderComponent } from './student-header/student-header.component';
import { StudentFooterComponent } from './student-footer/student-footer.component';
import { StudentLandingPageComponent } from './student-landing-page/student-landing-page.component';


@NgModule({
  declarations: [StudentComponent, StudentHeaderComponent, StudentFooterComponent, StudentLandingPageComponent],
  imports: [
    CommonModule,
    StudentRoutingModule
  ]
})
export class StudentModule { }
