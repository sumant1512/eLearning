import { Injectable } from "@angular/core";
import { Router, CanActivate } from "@angular/router";
import { AuthService } from "../store/auth/api/auth.service";

@Injectable({
  providedIn: "root",
})
export class StudentGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate(): boolean {
    if (
      !this.authService.isLoggedIn() ||
      this.authService.getUserType() !== "Student"
    ) {
      this.router.navigate(["home"]);
      return false;
    }
    return true;
  }
}
