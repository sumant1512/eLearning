import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { TopicWithClassSubjectListType } from "../types/topic-with-class-subject.type";
import { HOST } from "../../../../../config.constants";

@Injectable({
  providedIn: "root",
})
export class TopicWithClassSubjectService {
  constructor(private http: HttpClient) {}
  getTopicWithClassSubject(): Observable<TopicWithClassSubjectListType[]> {
    return this.http.get<any>(HOST + "getTopicWithClassAndSubject", {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("AUTH_TOKEN"),
      }),
    });
  }
}
