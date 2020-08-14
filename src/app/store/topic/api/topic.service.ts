import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { localHost } from "../../../../../config.constants";

@Injectable({
  providedIn: "root",
})
export class TopicService {
  constructor(private http: HttpClient) {}

  addTopic(topicDetails) {
    return this.http.post<any>(localHost + "addTopic", topicDetails, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("AUTH_TOKEN"),
      }),
    });
  }

  getAllTopics(): Observable<any[]> {
    return this.http.get<any[]>(localHost + "getAllTopics", {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("AUTH_TOKEN"),
      }),
    });
  }
  editTopicName(topicDetails) {
    return this.http.post<any>(localHost + "editTopicName", topicDetails, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("AUTH_TOKEN"),
      }),
    });
  }

  getSubjectsOfClass(classDetail) {
    return this.http.post<any>(localHost + "getSubjectsOfClass", classDetail, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("AUTH_TOKEN"),
      }),
    });
  }

  getTopicsOfSubject(topicDetail): Observable<any[]> {
    return this.http.post<any>(localHost + "getTopicsOfSubject", topicDetail, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("AUTH_TOKEN"),
      }),
    });
  }

  removeTopic(id: number) {
    return this.http.delete<any>(
      `http://localhost:3000/` + `removeTopic/${id}`,
      {
        headers: new HttpHeaders({
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("AUTH_TOKEN"),
        }),
      }
    );
  }
}
