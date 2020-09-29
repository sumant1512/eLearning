import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
} from "@angular/common/http";
import { HOST } from "config.constants";

@Injectable({
  providedIn: "root",
})
export class VerificationService {
  constructor(private http: HttpClient) {}

  //service for otp verification
  verifyOtp(otpDetails) {
    return this.http.post<any>(HOST +"verify",otpDetails,{
      observe: "response",
      headers: new HttpHeaders().set("Content-Type", "application/json"),
    });
  }
}
 