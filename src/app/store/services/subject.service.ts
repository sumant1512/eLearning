import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { AuthService } from "../auth/api/auth.service";

@Injectable({
  providedIn: "root",
})
export class SubjectService {
  constructor(private http: HttpClient, private authService: AuthService) {}
  token = this.authService.getToken();

  reqHeader = new HttpHeaders({
    "Content-Type": "application/json",
    Authorization: "Bearer " + this.token,
  });
  addSubject(subjectDetails) {
    return this.http.post<any>(
      "http://localhost:3000" + "/addSubject",
      subjectDetails,
      { headers: this.reqHeader }
    );
  }
  getSubjects(): Observable<any[]> {
    return this.http.get<any[]>("http://localhost:3000" + "/getSubjects", {
      headers: this.reqHeader,
    });
  }
  getClassesOfUnassignedSubjects(subject_id) {
    return this.http.post<any>(
      "http://localhost:3000" + "/getClassesOfUnassignedSubjects",
      subject_id,
      { headers: this.reqHeader }
    );
  }
  assignSubjectToClass(Details) {
    return this.http.post<any>(
      "http://localhost:3000" + "/assignSubjectToClass",
      Details,
      { headers: this.reqHeader }
    );
  }

  removeSubject(id: number) {
    return this.http.delete<any>(
      "http://localhost:3000" + `/removeSubject/${id}`,
      { headers: this.reqHeader }
    );
  }
}
