import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RoutesEnum } from "./routing.constants";
import { AuthService } from "./store/auth/api/auth.service";

const routes: Routes = [
  { path: "", redirectTo: RoutesEnum.HOME, pathMatch: "full" },
  {
    path: RoutesEnum.HOME,
    loadChildren: () => import("./+home/home.module").then((m) => m.HomeModule),
  },
  {
    path: RoutesEnum.REGISTRATION,
    loadChildren: () =>
      import("./+registration/registration.module").then(
        (m) => m.RegistrationModule
      ),
  },
  {
    path: RoutesEnum.VERIFICATION,
    loadChildren: () =>
      import("./+school-verification/school-verification.module").then(
        (m) => m.SchoolVerificationModule
      ),
  },
  {
    path: RoutesEnum.ADMIN,
    loadChildren: () =>
      import("./+admin/admin.module").then((m) => m.AdminModule),
    canActivate: [AuthService],
  },
  // {
  //   path: RoutesEnum.PRIVACY_POLICY,
  //   component: PrivacyPolicyComponent,
  // },
  { path: "**", redirectTo: RoutesEnum.HOME, pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
