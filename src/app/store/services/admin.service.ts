import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { AuthService } from "../auth/api/auth.service";

@Injectable({
  providedIn: "root",
})
export class AdminService {
  constructor(private http: HttpClient, private authService: AuthService) {}
  token = this.authService.getToken();

  reqHeader = new HttpHeaders({
    "Content-Type": "application/json",
    Authorization: "Bearer " + this.token,
  });
}
