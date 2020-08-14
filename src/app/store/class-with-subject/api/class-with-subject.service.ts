import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { ClassWithSubjectListType } from "../types/class-with-subject.type";
import { localHost } from "config.constants";
@Injectable({
  providedIn: "root",
})
export class ClassWithSubjectService {
  constructor(private http: HttpClient) {}
  getClassWithSubject(): Observable<ClassWithSubjectListType[]> {
    return this.http.get<any>(localHost + "getClassWithSubject", {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("AUTH_TOKEN"),
      }),
    });
  }
}
