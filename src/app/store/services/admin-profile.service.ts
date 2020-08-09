import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { SERVER_PORT } from "config.constants";
import { Observable } from "rxjs";
import { AuthService } from "../auth/api/auth.service";

@Injectable({
  providedIn: "root",
})
export class AdminProfileService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  token = this.authService.getToken();

  // service to call current school
  getCurrentSchool(): Observable<any[]> {
    var reqHeader = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + this.token,
    });
    return this.http.get<any[]>("http://localhost:3000" + "/getProfile", {
      headers: reqHeader,
    });
  }

  // common service for assigning to class
  saveSchoolImage(image) {
    console.log("test");
    return this.http.post(
      "http://localhost:" + SERVER_PORT + "/saveSchoolImage",
      image
    );
  }

  saveCoverImage(cover) {
    console.log("test");
    return this.http.post(
      "http://localhost:" + SERVER_PORT + "/saveCoverImage",
      cover
    );
  }
}
