import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { StudentComponent } from "./student.component";
import { StudentLandingPageComponent } from "./student-landing-page/student-landing-page.component";

const routes: Routes = [
  {
    path: "",
    component: StudentComponent,
    children: [{ path: "", component: StudentLandingPageComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentRoutingModule {}
