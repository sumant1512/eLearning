import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ClassService {
  constructor(private http: HttpClient) {}
  //token = this.authService.getToken();

  // reqHeader = new HttpHeaders({
  //   "Content-Type": "application/json",
  //   Authorization: "Bearer " + this.token,
  // });

  addClass(className) {
    return this.http.post<any>(
      "https://tcslearningapplication.herokuapp.com/addClass",
      className,
      {
        headers: new HttpHeaders({
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("AUTH_TOKEN"),
        }),
      }
    );
  }
  getClasses(): Observable<any[]> {
    return this.http.get<any[]>(
      "https://tcslearningapplication.herokuapp.com/getClasses",
      {
        headers: new HttpHeaders({
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("AUTH_TOKEN"),
        }),
      }
    );
  }
  editClassName(classDetails) {
    return this.http.post<any>(
      "https://tcslearningapplication.herokuapp.com/editClassName",
      classDetails,
      {
        headers: new HttpHeaders({
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("AUTH_TOKEN"),
        }),
      }
    );
  }
  removeClass(id: number) {
    return this.http.delete<any>(
      `https://tcslearningapplication.herokuapp.com/removeClass/${id}`,
      {
        headers: new HttpHeaders({
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("AUTH_TOKEN"),
        }),
      }
    );
  }
}
