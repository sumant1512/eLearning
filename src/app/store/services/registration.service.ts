import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HOST } from "config.constants";

@Injectable({
  providedIn: "root",
})
export class RegistrationService {
  constructor(private http: HttpClient) {}

  // service for schoolRegistration api call
  schoolRegistration(userDetails) {
    return this.http.post(HOST + " schoolRegistration", userDetails);
  }
}
