import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { HOST } from "config.constants";

@Injectable({
  providedIn: 'root'
})
export class StudentSamplePaperSyllabusService {
constructor(private http: HttpClient) {}

  getTransformedDataForStudent(studentDetails): Observable<any[]> {
    return this.http.post<any>(HOST + "getTransformedDataForStudent",studentDetails, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("AUTH_TOKEN"),
      }),
    });
  }
}
