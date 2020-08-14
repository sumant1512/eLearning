import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { AuthService } from "../../auth/api/auth.service";
import { localHost } from "../../../../../config.constants";

@Injectable({
  providedIn: "root",
})
export class SubjectService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  addSubject(subjectDetails) {
    return this.http.post<any>(
      "https://tcslearningapplication.herokuapp.com" + "/addSubject",
      subjectDetails,
      {
        headers: new HttpHeaders({
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("AUTH_TOKEN"),
        }),
      }
    );
  }

  getSubjects(): Observable<any[]> {
    return this.http.get<any[]>(
      "https://tcslearningapplication.herokuapp.com" + "/getSubjects",
      {
        headers: new HttpHeaders({
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("AUTH_TOKEN"),
        }),
      }
    );
  }

  editSubjectName(subjectDetails) {
    return this.http.post<any>(localHost + "editSubjectName", subjectDetails, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("AUTH_TOKEN"),
      }),
    });
  }

  getClassesOfUnassignedSubjects(subject_id) {
    return this.http.post<any>(
      "https://tcslearningapplication.herokuapp.com" +
        "/getClassesOfUnassignedSubjects",
      subject_id,
      {
        headers: new HttpHeaders({
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("AUTH_TOKEN"),
        }),
      }
    );
  }

  assignSubjectToClass(details) {
    return this.http.post<any>(
      "https://tcslearningapplication.herokuapp.com" + "/assignSubjectToClass",
      details,
      {
        headers: new HttpHeaders({
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("AUTH_TOKEN"),
        }),
      }
    );
  }

  removeSubject(id: number) {
    return this.http.delete<any>(
      `http://localhost:3000/` + `removeSubject/${id}`,
      {
        headers: new HttpHeaders({
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("AUTH_TOKEN"),
        }),
      }
    );
  }
}
