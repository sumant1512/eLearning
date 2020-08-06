import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RegistrationRoutingModule } from "./registration-routing.module";
import { RegistrationComponent } from "./registration.component";
import { HomeModule } from "../+home/home.module";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

@NgModule({
  declarations: [RegistrationComponent],
  exports: [],
  imports: [
    CommonModule,
    RegistrationRoutingModule,
    HomeModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class RegistrationModule {}
