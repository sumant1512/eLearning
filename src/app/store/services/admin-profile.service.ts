import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { AuthService } from "../auth/api/auth.service";
import { HOST } from "config.constants";

@Injectable({
  providedIn: "root",
})
export class AdminProfileService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  token = this.authService.getToken();
  reqHeader = new HttpHeaders({
    "Content-Type": "application/json",
    Authorization: "Bearer " + this.token,
  });

  // service to call current school
  getCurrentSchool(): Observable<any[]> {
    var reqHeader = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + this.token,
    });
    return this.http.get<any[]>(HOST + " /getProfile", {
      headers: reqHeader,
    });
  }

  startSession() {
    return this.http.get(HOST + " startSession", {
      observe: "response",
      headers: this.reqHeader,
    });
  }

  // common service for assigning to class
  saveSchoolImage(image) {
    console.log("test");
    return this.http.post(HOST + " /saveSchoolImage", image);
  }

  saveCoverImage(cover) {
    console.log("test");
    return this.http.post(HOST + " /saveCoverImage", cover);
  }
}
