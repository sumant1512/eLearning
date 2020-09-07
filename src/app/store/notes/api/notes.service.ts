import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { HOST } from "config.constants";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class NotesService {
  constructor(private http: HttpClient) {}

  addNotes(noteDetails) {
    return this.http.post<any>(HOST + "addNote", noteDetails, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("AUTH_TOKEN"),
      }),
    });
  }

  getNotes(): Observable<any[]> {
    return this.http.get<any[]>(HOST + "getNotes", {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("AUTH_TOKEN"),
      }),
    });
  }

  editNotesName(noteDetails) {
    return this.http.post<any>(HOST + "editNotesName", noteDetails, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("AUTH_TOKEN"),
      }),
    });
  }

  removeNotes(id: number) {
    return this.http
      .delete<any>(HOST + `removeClass/${id}`, {
        headers: new HttpHeaders({
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("AUTH_TOKEN"),
        }),
      })
      .pipe(catchError(this.handleError));
  }
  private handleError(error: HttpErrorResponse) {
    alert(error.error.message);
    return throwError(error.error.message);
  }
}
