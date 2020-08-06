import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { RegistrationRoutingModule } from "./registration-routing.module";
import { RegistrationComponent } from "./registration.component";
import { HomeModule } from "../+home/home.module";

@NgModule({
  declarations: [RegistrationComponent],
  imports: [CommonModule, RegistrationRoutingModule, HomeModule],
})
export class RegistrationModule {}
