import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { HOST } from "config.constants";
@Injectable({
  providedIn: "root",
})
export class ForgetPasswordService {
  constructor(private http: HttpClient) {}

  getOTP(email) {
    return this.http.post<any>(HOST + "sendOTP", email, {
      observe: "response",
      headers: new HttpHeaders().set("Content-Type", "application/json"),
    });
  }

  updatePassword(details) {
    return this.http.post<any>(HOST + "updatePassword", details, {
      observe: "response",
      headers: new HttpHeaders().set("Content-Type", "application/json"),
    });
  }
}
