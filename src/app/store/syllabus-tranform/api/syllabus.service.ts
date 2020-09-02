import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { HOST } from "config.constants";
@Injectable({
  providedIn: "root",
})
export class SyllabusService {
  constructor(private http: HttpClient) {}

  getTransformedSyllabus(): Observable<any[]> {
    return this.http.get<any[]>(HOST + "getTransformedSyllabus", {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("AUTH_TOKEN"),
      }),
    });
  }
}
