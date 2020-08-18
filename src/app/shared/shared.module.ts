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

@NgModule({
  declarations: [
    SharedComponent,
    PrivacyPolicyComponent,
    CommonAddComponent,
    CommonAddMobileComponent,
    CommonViewComponent,
    CommonSampleSyllabusComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [
    CommonAddComponent,
    CommonAddMobileComponent,
    CommonViewComponent,
    CommonSampleSyllabusComponent,
  ],
})
export class SharedModule {}
