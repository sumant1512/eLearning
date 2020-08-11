import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { AuthService } from "../../auth/api/auth.service";

@Injectable({
  providedIn: "root",
})
export class ClassService {
  constructor(private http: HttpClient, private authService: AuthService) {}
  token = this.authService.getToken();

  reqHeader = new HttpHeaders({
    "Content-Type": "application/json",
    Authorization: "Bearer " + this.token,
  });
  addClass(className) {
    console.log(this.token);
    return this.http.post<any>(
      "https://tcslearningapplication.herokuapp.com/addClass",
      className,
      { headers: this.reqHeader }
    );
  }
  getClasses(): Observable<any[]> {
    return this.http.get<any[]>(
      "https://tcslearningapplication.herokuapp.com/getClasses",
      { headers: this.reqHeader }
    );
  }
  editClassName(classDetails) {
    return this.http.post<any>(
      "https://tcslearningapplication.herokuapp.com/editClassName",
      classDetails,
      { headers: this.reqHeader }
    );
  }
  removeClass(id: number) {
    return this.http.delete<any>(
      `https://tcslearningapplication.herokuapp.com/removeClass/${id}`,
      { headers: this.reqHeader }
    );
  }
}
