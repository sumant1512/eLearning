import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { AuthService } from "../../auth/api/auth.service";

@Injectable({
  providedIn: "root",
})
export class ClassService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  reqHeader = new HttpHeaders({
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("AUTH_TOKEN"),
  });
  addClass(className, authToken) {
    const reqHeader = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + authToken,
    });
    return this.http.post<any>(
      "https://tcslearningapplication.herokuapp.com/addClass",
      className,
      { headers: reqHeader }
    );
  }
  getClasses(authToken): Observable<any[]> {
    const reqHeader = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + authToken,
    });
    return this.http.get<any[]>(
      "https://tcslearningapplication.herokuapp.com/getClasses",
      { headers: reqHeader }
    );
  }
  editClassName(classDetails) {
    return this.http.post<any>(
      "https://tcslearningapplication.herokuapp.com/editClassName",
      classDetails,
      { headers: this.reqHeader }
    );
  }
  removeClass(id: number) {
    return this.http.delete<any>(
      `https://tcslearningapplication.herokuapp.com/removeClass/${id}`,
      { headers: this.reqHeader }
    );
  }
}
