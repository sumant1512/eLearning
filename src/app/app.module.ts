import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeModule } from "./+home/home.module";
import { AdminModule } from "./+admin/admin.module";
import { SharedModule } from "./shared/shared.module";
import { RegistrationModule } from "./+registration/registration.module";
import { SchoolVerificationModule } from "./+school-verification/school-verification.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    HomeModule,
    AdminModule,
    SharedModule,
    RegistrationModule,
    SchoolVerificationModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
