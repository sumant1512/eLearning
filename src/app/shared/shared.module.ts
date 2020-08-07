import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SharedComponent } from "./shared.component";
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

@NgModule({
  declarations: [SharedComponent, PrivacyPolicyComponent],
  imports: [CommonModule],
})
export class SharedModule {}
