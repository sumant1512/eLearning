import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { localHost } from "config.constants";

@Injectable({
  providedIn: "root",
})
export class RegistrationService {
  constructor(private http: HttpClient) {}

  // service for schoolRegistration api call
  schoolRegistration(userDetails) {
    return this.http.post(localHost + "schoolRegistration", userDetails);
  }
}
