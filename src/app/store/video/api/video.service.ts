import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
} from "@angular/common/http";
import { HOST } from "config.constants";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(private http: HttpClient) { }

  saveVideo(video): Observable<any[]> {
    var reqHeader = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("AUTH_TOKEN"),
    });
    return this.http.post<any>(HOST + "saveVideo", video, {
      headers: reqHeader,
    });
  }

   getVideo(): Observable<any[]> {
    var reqHeader = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("AUTH_TOKEN"),
    });
    return this.http.get<any>(HOST + "getVideos", {
      headers: reqHeader,
    });
  }
}
