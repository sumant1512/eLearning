import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeModule } from "./+home/home.module";
import { AdminModule } from "./+admin/admin.module";
import { SharedModule } from "./shared/shared.module";
import { RegistrationModule } from "./+registration/registration.module";
import { SchoolVerificationModule } from "./+school-verification/school-verification.module";

import { appReducers } from "./store/app.reducers";
import { AppEffects } from "./store/app.effects";
import { ResetPasswordModule } from "./+reset-password/reset-password.module";

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
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([...AppEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 10,
    }),
    ResetPasswordModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
