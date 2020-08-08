import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AuthService } from "./auth.service";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ClassService {
  constructor(private http: HttpClient, private authService: AuthService) {}
  token = this.authService.getToken();

  reqHeader = new HttpHeaders({
    "Content-Type": "application/json",
    Authorization: "Bearer " + this.token,
  });
  addClass(class_name) {
    return this.http.post<any>(
      "https://tcslearningapplication.herokuapp.com/addClass",
      class_name,
      { headers: this.reqHeader }
    );
  }
  getClasses(): Observable<any[]> {
    return this.http.get<any[]>(
      "https://tcslearningapplication.herokuapp.com/getClasses",
      { headers: this.reqHeader }
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
