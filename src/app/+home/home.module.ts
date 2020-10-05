import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { LoginFormComponent } from "./login-form/login-form.component";
import { ReactiveFormsModule } from "@angular/forms";
import { HomeHeaderComponent } from "./home-header/home-header.component";
import { CarouselComponent } from "./carousel/carousel.component";
import { DescriptionCardComponent } from "./description-card/description-card.component";
import { HomeFooterComponent } from "./home-footer/home-footer.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [
    HomeComponent,
    LoginFormComponent,
    HomeHeaderComponent,
    CarouselComponent,
    DescriptionCardComponent,
    HomeFooterComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, ReactiveFormsModule, SharedModule],
  exports: [HomeHeaderComponent, HomeFooterComponent],
})
export class HomeModule {}
