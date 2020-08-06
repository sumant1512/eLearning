import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SchoolVerificationComponent } from "./school-verification.component";

const routes: Routes = [{ path: "", component: SchoolVerificationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SchoolVerificationRoutingModule {}
