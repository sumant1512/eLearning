import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { HOST } from "config.constants";

@Injectable({
  providedIn: "root",
})
export class ClassService {
  constructor(private http: HttpClient) {}

  addClass(className) {
    return this.http.post<any>(HOST + "addClass", className, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("AUTH_TOKEN"),
      }),
    });
  }

  getClasses(): Observable<any[]> {
    return this.http.get<any[]>(HOST + "getClasses", {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("AUTH_TOKEN"),
      }),
    });
  }

  editClassName(classDetails) {
    return this.http.post<any>(HOST + "editClassName", classDetails, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("AUTH_TOKEN"),
      }),
    });
  }

  removeClass(id: number) {
    return this.http.delete<any>(HOST + `removeClass/${id}`, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("AUTH_TOKEN"),
      }),
    });
  }
}
