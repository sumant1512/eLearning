import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Subject, Observable } from "rxjs";
import { ProfileType } from "../types/profile.type";
import { HOST } from "config.constants";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  user_type: string;

  constructor(private http: HttpClient, private router: Router) {}

  login(userInfo): Observable<any> {
    return this.http.post(HOST + "login", userInfo, {
      observe: "response",
      headers: new HttpHeaders().set("Content-Type", "application/json"),
    });
  }

  getProfile(authToken): Observable<ProfileType[]> {
    var reqHeader = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + authToken,
    });
    return this.http.get<ProfileType[]>(HOST + "getProfile", {
      headers: reqHeader,
    });
  }

  saveAdminImage(image) {
    // var reqHeader = new HttpHeaders({
    //   "Content-Type": "application/json",
    //   Authorization: "Bearer " + localStorage.getItem("AUTH_TOKEN"),
    // });
    return this.http.post<any>("http://localhost:8080/saveAdminImage", image);
  }

  //Logout call
  public logout(): void {
    this.logoutUser();
    this.router.navigateByUrl("/home");
  }

  // clear session for user
  private logoutUser(): void {
    localStorage.removeItem("AUTH_TOKEN");
    localStorage.removeItem("user_type");
  }

  //get user authentication token
  getToken(): string {
    return localStorage.getItem("AUTH_TOKEN");
  }

  // to check if token is available
  public isLoggedIn(): boolean {
    const authToken = this.getToken();
    const status = authToken ? true : false;
    return status;
  }

  // to navigate to home is user is not logged in
  canActivate(): boolean {
    if (!this.isLoggedIn()) {
      this.router.navigate(["home"]);
      return false;
    }
    return true;
  }
}
