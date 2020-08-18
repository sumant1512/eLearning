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
    path: RoutesEnum.RESET_PASSWORD,
    loadChildren: () =>
      import("./+reset-password/reset-password.module").then(
        (m) => m.ResetPasswordModule
      ),
  },
  {
    path: RoutesEnum.ADMIN,
    loadChildren: () =>
      import("./+admin/admin.module").then((m) => m.AdminModule),
    canActivate: [AuthService],
  },
  {
    path: RoutesEnum.STUDENT,
    loadChildren: () =>
      import("./+student/student.module").then((m) => m.StudentModule),
    canActivate: [AuthService],
  },
  { path: "**", redirectTo: RoutesEnum.HOME, pathMatch: "full" },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: "enabled",
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
