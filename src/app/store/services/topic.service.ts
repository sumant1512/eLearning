import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { AuthService } from "../auth/api/auth.service";

@Injectable({
  providedIn: "root",
})
export class TopicService {
  constructor(private http: HttpClient, private authService: AuthService) {}
  token = this.authService.getToken();

  reqHeader = new HttpHeaders({
    "Content-Type": "application/json",
    Authorization: "Bearer " + this.token,
  });

  addTopic(topicDetails) {
    return this.http.post<any>(
      "http://localhost:3000" + "/addTopic",
      topicDetails,
      { headers: this.reqHeader }
    );
  }

  getSubjectsOfClass(classDetail) {
    return this.http.post<any>(
      "http://localhost:3000" + "/getSubjectsOfClass",
      classDetail,
      { headers: this.reqHeader }
    );
  }

  getTopicsOfSubject(topicDetail): Observable<any[]> {
    return this.http.post<any[]>(
      "http://localhost:3000" + "/getTopicsOfSubject",
      topicDetail,
      { headers: this.reqHeader }
    );
  }

  removeTopic(id: number) {
    return this.http.delete<any>(
      "http://localhost:3000" + `/removeTopic/${id}`,
      { headers: this.reqHeader }
    );
  }
}
