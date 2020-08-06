import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { SERVER_PORT } from "config.constants";

@Injectable({
  providedIn: "root",
})
export class AdminProfileService {
  constructor(private http: HttpClient) {}

  // common service for assigning to class
  saveSchoolImage(image) {
    console.log("test");
    return this.http.post(
      "http://localhost:" + SERVER_PORT + "/saveSchoolImage",
      image
    );
  }
}
