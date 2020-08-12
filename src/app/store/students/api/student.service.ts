import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AuthService } from "../../auth/api/auth.service";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class StudentService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  token = this.authService.getToken();

  // token = localStorage.getItem("JWT_TOKEN");
  reqHeader = new HttpHeaders({
    "Content-Type": "application/json",
    Authorization: "Bearer " + this.token,
  });

  // service for Student studentRegistration api call
  studentRegistration(Student) {
    return this.http.post<any>(
      "https://tcslearningapplication.herokuapp.com/studentRegistration",
      Student,
      { headers: this.reqHeader }
    );
  }

  // service for View of all registered Students  api call
  studentFromSchool(authToken): Observable<any[]> {
    const reqHeader = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + authToken,
    });
    return this.http.get<any[]>(
      "https://tcslearningapplication.herokuapp.com/studentFromSchool",
      {
        headers: this.reqHeader,
      }
    );
  }

  startSession() {
    return this.http.get(
      "https://tcslearningapplication.herokuapp.com/startSession",
      {
        observe: "response",
        headers: this.reqHeader,
      }
    );
  }
}
