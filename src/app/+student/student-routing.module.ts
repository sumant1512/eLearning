import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { StudentComponent } from "./student.component";
import { StudentLandingPageComponent } from "./student-landing-page/student-landing-page.component";
import { StudentRoutesEnum } from "./student-routes.constants";
import { StudentProfileComponent } from "./student-profile/student-profile.component";

const routes: Routes = [
  {
    path: "",
    component: StudentComponent,
    children: [
      { path: "", component: StudentLandingPageComponent },
      {
        path: StudentRoutesEnum.PROFILE,
        component: StudentProfileComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentRoutingModule {}
