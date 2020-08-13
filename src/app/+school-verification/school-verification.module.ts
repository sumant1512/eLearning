import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeModule } from "../+home/home.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SchoolVerificationRoutingModule } from "./school-verification-routing.module";
import { SchoolVerificationComponent } from "./school-verification.component";

@NgModule({
  declarations: [SchoolVerificationComponent],
  imports: [
    CommonModule,
    SchoolVerificationRoutingModule,
    HomeModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class SchoolVerificationModule {}
