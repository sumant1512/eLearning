import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Subject, Observable } from "rxjs";
import { ProfileType } from "../types/profile.type";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  user_type: string;

  constructor(private http: HttpClient, private router: Router) {}

  //Header Button Change to Logout
  private msgsrc = new Subject<string>();
  loginmsg$ = this.msgsrc.asObservable();
  sendmsg(message: string) {
    this.msgsrc.next(message);
  }

  public login(userInfo): Observable<any> {
    return this.http.post(
      "https://tcslearningapplication.herokuapp.com/login",
      userInfo,
      {
        observe: "response",
        headers: new HttpHeaders().set("Content-Type", "application/json"),
      }
    );
  }

  getProfile(authToken): Observable<ProfileType[]> {
    var reqHeader = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + authToken,
    });
    return this.http.get<ProfileType[]>(
      "https://tcslearningapplication.herokuapp.com/getProfile",
      {
        headers: reqHeader,
      }
    );
  }

  private loginUser(user_type: string, authToken: string): void {
    this.user_type = user_type;
    localStorage.setItem("user_type", user_type);
    localStorage.setItem("AUTH_TOKEN", authToken);
    this.router.navigateByUrl("/admin/profile");
  }

  //Logout call
  public logout(): void {
    this.logoutUser();
    this.router.navigateByUrl("/home");
  }

  // clear session for user
  private logoutUser(): void {
    this.user_type = null;
    localStorage.removeItem("AUTH_TOKEN");
  }

  //get user authentication token
  getToken(): string {
    return localStorage.getItem("AUTH_TOKEN");
  }

  public isAuthenticated(): boolean {
    const authToken = this.getToken();
    const status = authToken ? true : false;
    return status;
  }
}
