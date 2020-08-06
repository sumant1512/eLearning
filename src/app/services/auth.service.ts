import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Subject } from "rxjs";
import { SERVER_PORT } from "config.constants";

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

  public login(userInfo): void {
    console.log(userInfo);
    const result = this.http.post(
      "http://localhost:" + SERVER_PORT + "/login",
      userInfo,
      {
        observe: "response",
        headers: new HttpHeaders().set("Content-Type", "application/json"),
      }
    );
    result.subscribe((response) => {
      console.log(response);
      if (response.status === 200) {
        this.msgsrc.next("login success");
        const authToken = response.body["authToken"];
        console.log(authToken);
        this.loginUser(response.body["user_type"], authToken);
      } else {
        // Swal.fire("Sorry!", response.body["message"], "error");
      }
    });
  }

  public getProfile(userInfo): void {
    console.log(userInfo);
    const result = this.http.post(
      "http://localhost:" + SERVER_PORT + "/getProfile",
      userInfo,
      {
        observe: "response",
        headers: new HttpHeaders().set("Content-Type", "application/json"),
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
