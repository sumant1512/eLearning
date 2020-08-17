import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { HOST } from "config.constants";
import { SamplePaperListType } from "../types/sample-paper.type";
@Injectable({
  providedIn: "root",
})
export class SamplePaperService {
  constructor(private http: HttpClient) {}

  addSamplePaper(samplePaperDetails) {
    return this.http.post<any>(HOST + "addSamplePaper", samplePaperDetails, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("AUTH_TOKEN"),
      }),
    });
  }

  getSamplePapers(): Observable<SamplePaperListType[]> {
    return this.http.get<any>(HOST + "getSamplePapers", {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("AUTH_TOKEN"),
      }),
    });
  }
}
