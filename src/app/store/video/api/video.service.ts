import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { HOST } from "config.constants";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { AppState } from "../../app.state";

@Injectable({
  providedIn: "root",
})
export class VideoService {
  constructor(private http: HttpClient, private store: Store<AppState>) {}

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
    let videoResponse;
    this.store.select("profile").subscribe((response) => {
      if (response.userDetails.user_type === "Student") {
        const studentDetails = {
          schoolId: response.userDetails.user_id,
          classId: response.userDetails.class_id,
        };
        var reqHeader = new HttpHeaders({
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("AUTH_TOKEN"),
        });
        videoResponse = this.http.post<any>(
          HOST + "getVideosForStudent",
          studentDetails,
          {
            headers: reqHeader,
          }
        );
      } else {
        {
          var reqHeader = new HttpHeaders({
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("AUTH_TOKEN"),
          });
          videoResponse = this.http.get<any>(HOST + "getVideos", {
            headers: reqHeader,
          });
        }
      }
    });
    return videoResponse;
  }

  removeVideo(id: number) {
    return this.http.delete<any>(HOST + `removeVideo/${id}`, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("AUTH_TOKEN"),
      }),
    });
  }
}
