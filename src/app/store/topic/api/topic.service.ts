import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class TopicService {
  constructor(private http: HttpClient) {}

  addTopic(topicDetails) {
    return this.http.post<any>(
      "https://tcslearningapplication.herokuapp.com/addTopic",
      topicDetails,
      {
        headers: new HttpHeaders({
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("AUTH_TOKEN"),
        }),
      }
    );
  }

  getAllTopics(): Observable<any[]> {
    return this.http.get<any[]>(
      "https://tcslearningapplication.herokuapp.com/getAllTopics",
      {
        headers: new HttpHeaders({
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("AUTH_TOKEN"),
        }),
      }
    );
  }
  editTopicName(topicDetails) {
    return this.http.post<any>(
      "https://tcslearningapplication.herokuapp.com/editTopicName",
      topicDetails,
      {
        headers: new HttpHeaders({
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("AUTH_TOKEN"),
        }),
      }
    );
  }

  getSubjectsOfClass(classDetail) {
    return this.http.post<any>(
      "https://tcslearningapplication.herokuapp.com/getSubjectsOfClass",
      classDetail,
      {
        headers: new HttpHeaders({
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("AUTH_TOKEN"),
        }),
      }
    );
  }

  getTopicsOfSubject(topicDetail): Observable<any[]> {
    return this.http.post<any>(
      "https://tcslearningapplication.herokuapp.com/getTopicsOfSubject",
      topicDetail,
      {
        headers: new HttpHeaders({
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("AUTH_TOKEN"),
        }),
      }
    );
  }

  removeTopic(id: number) {
    return this.http.delete<any>(
      `https://tcslearningapplication.herokuapp.com/removeTopic/${id}`,
      {
        headers: new HttpHeaders({
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("AUTH_TOKEN"),
        }),
      }
    );
  }
}
