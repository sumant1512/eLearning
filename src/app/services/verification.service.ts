import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class VerificationService {
  constructor(private http: HttpClient) {}

  //service for otp verification
  verifyOtp(otpDetails) {
    return this.http.post(
      "https://tcslearningapplication.herokuapp.com/verify",
      otpDetails
    );
  }
}
