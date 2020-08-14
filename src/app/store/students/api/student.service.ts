import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AuthService } from "../../auth/api/auth.service";
import { Observable } from "rxjs";
import { localHost } from "../../../../../config.constants";

@Injectable({
  providedIn: "root",
})
export class StudentService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  //token = this.authService.getToken()

  // service for Student studentRegistration api call
  studentRegistration(Student) {
    return this.http.post<any>(localHost + "studentRegistration", Student, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("AUTH_TOKEN"),
      }),
    });
  }

  // service for View of all registered Students  api call
  studentFromSchool(): Observable<any[]> {
    return this.http.get<any[]>(localHost + "studentFromSchool", {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("AUTH_TOKEN"),
      }),
    });
  }

  startSession() {
    return this.http.get(localHost + "startSession", {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("AUTH_TOKEN"),
      }),
    });
  }
}
