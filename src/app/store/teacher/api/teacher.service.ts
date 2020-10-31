import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { HOST } from "config.constants";
import { Observable } from "rxjs";
import { AuthService } from "../../auth/api/auth.service";

@Injectable({
  providedIn: "root",
})
export class TeacherService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  // service for Teacher TeacherRegistration api call
  teacherRegistration(teacher) {
    return this.http.post<any>(HOST + "teacherRegistration", teacher, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("AUTH_TOKEN"),
      }),
    });
  }

  // service for View of all registered Teachers  api call
  teacherFromSchool(): Observable<any[]> {
    return this.http.get<any[]>(HOST + "teacherFromSchool", {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("AUTH_TOKEN"),
      }),
    });
  }

  // service to tag subject to teacher
  tagSubjectToTeacher(subjectDetails) {
    return this.http.post<any>(HOST + "tagSubjectToTeacher", subjectDetails, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("AUTH_TOKEN"),
      }),
    });
  }

  removeTeacher(id: number) {
    return this.http.delete<any>(HOST + `removeTeacher/${id}`, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("AUTH_TOKEN"),
      }),
    });
  }
}
