import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AuthService } from "../../auth/api/auth.service";
import { Observable } from "rxjs";
import { HOST } from "../../../../../config.constants";

@Injectable({
  providedIn: "root",
})
export class StudentService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  // service for Student studentRegistration api call
  studentRegistration(Student) {
    return this.http.post<any>(HOST + "studentRegistration", Student, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("AUTH_TOKEN"),
      }),
    });
  }

  // service for View of all registered Students  api call
  studentFromSchool(): Observable<any[]> {
    return this.http.get<any[]>(HOST + "studentFromSchool", {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("AUTH_TOKEN"),
      }),
    });
  }

  startSession() {
    return this.http.get(HOST + "startSession", {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("AUTH_TOKEN"),
      }),
    });
  }

  removeStudent(id: number) {
    return this.http.delete<any>(HOST + `removeStudent/${id}`, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("AUTH_TOKEN"),
      }),
    });
  }

  updateClassofStudent(details) {
    return this.http.post<any>(HOST + "updateClassofStudent", details, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("AUTH_TOKEN"),
      }),
    });
  }
}
