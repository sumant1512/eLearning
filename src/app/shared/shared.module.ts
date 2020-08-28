import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SharedComponent } from "./shared.component";
import { PrivacyPolicyComponent } from "./privacy-policy/privacy-policy.component";
import { CommonAddComponent } from "./common-add/common-add.component";
import { CommonAddMobileComponent } from "./common-add-mobile/common-add-mobile.component";
import { CommonViewComponent } from "./common-view/common-view.component";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonSampleSyllabusComponent } from "./common-sample-syllabus/common-sample-syllabus.component";
import { ProfileSkeletonComponent } from './profile-skeleton/profile-skeleton.component';
import { CommonProfileComponent } from './common-profile/common-profile.component';
import { CommonSampleSyllabusMobileComponent } from './common-sample-syllabus-mobile/common-sample-syllabus-mobile.component';

@NgModule({
  declarations: [
    SharedComponent,
    PrivacyPolicyComponent,
    CommonAddComponent,
    CommonAddMobileComponent,
    CommonViewComponent,
    CommonSampleSyllabusComponent,
    ProfileSkeletonComponent,
    CommonProfileComponent,
    CommonSampleSyllabusMobileComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [
    CommonAddComponent,
    CommonAddMobileComponent,
    CommonViewComponent,
    CommonSampleSyllabusComponent,
    CommonProfileComponent,
    CommonSampleSyllabusMobileComponent,
    ProfileSkeletonComponent,
  ],
})
export class SharedModule {}
